import { NextResponse } from 'next/server';
import { globalApi } from '../../serverConfig';
import { cookies } from 'next/headers';
import { parse } from 'cookie';

const getUserByAccessToken = async (accessToken?: string) => {
  if (!accessToken) {
    return null;
  }

  try {
    const response = await globalApi.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch {
    return null;
  }
};

export async function POST() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (!refreshToken && !accessToken) {
    return NextResponse.json({ success: false });
  }

  if (accessToken) {
    const currentUser = await getUserByAccessToken(accessToken);
    if (currentUser) {
      return NextResponse.json({ success: true, ...currentUser });
    }

    if (!refreshToken) {
      return NextResponse.json({ success: false });
    }
  }

  try {
    const cookieHeader = [
      accessToken ? `accessToken=${accessToken}` : null,
      refreshToken ? `refreshToken=${refreshToken}` : null,
    ]
      .filter(Boolean)
      .join('; ');

    const response = await globalApi.post(
      '/auth/refresh',
      refreshToken ? { refreshToken } : undefined,
      {
        headers: cookieHeader
          ? {
              Cookie: cookieHeader,
            }
          : undefined,
      }
    );
    const setCookie = response.headers['set-cookie'];
    let nextAccessToken = accessToken;

    if (setCookie) {
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
      for (const el of cookieArray) {
        const parsedCookie = parse(el);
        const options = {
          expires: parsedCookie.Expires
            ? new Date(parsedCookie.Expires)
            : undefined,
          path: parsedCookie.Path,
          maxAge: Number(parsedCookie['Max-Age']),
        };

        if (parsedCookie.accessToken) {
          nextAccessToken = parsedCookie.accessToken;
          cookieStore.set('accessToken', parsedCookie.accessToken, options);
        }
        if (parsedCookie.refreshToken) {
          cookieStore.set('refreshToken', parsedCookie.refreshToken, options);
        }
      }
    }

    const user = await getUserByAccessToken(nextAccessToken);
    if (user) {
      return NextResponse.json({ success: true, ...user });
    }

    return NextResponse.json({ success: false });
  } catch {
    return NextResponse.json({ success: false });
  }
}
