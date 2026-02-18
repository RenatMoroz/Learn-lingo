import { NextResponse } from 'next/server';
import { globalApi } from '../../serverConfig';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const response = await globalApi.get('/auth/me', {
    headers: accessToken
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : undefined,
  });

  return NextResponse.json(response.data);
}
