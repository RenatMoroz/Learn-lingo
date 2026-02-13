import { NextRequest, NextResponse } from 'next/server';
import { globalApi } from '../serverConfig';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const params = Object.fromEntries(searchParams.entries());
  const response = await globalApi.get('/teachers', { params });
  return NextResponse.json(response.data);
}
