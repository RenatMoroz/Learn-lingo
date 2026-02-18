import { NextRequest, NextResponse } from 'next/server';
import { globalApi } from '../../serverConfig';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const result = await globalApi.post('/auth/register', body);
    return NextResponse.json(result.data);
  } catch (error) {}
};
