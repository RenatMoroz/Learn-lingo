import { NextRequest, NextResponse } from 'next/server';
import { globalApi } from '../../serverConfig';
interface PageProps {
  params: Promise<{ id: string }>;
}
export async function GET(req: NextRequest, { params }: PageProps) {
  const { id } = await params;
  const response = await globalApi.get(`/teachers/${id}`);
  return NextResponse.json(response.data);
}
