import { globalApi } from '@/app/api/serverConfig';
import { NextRequest, NextResponse } from 'next/server';

interface PageProps {
  params: Promise<{ id: string }>;
}
export async function GET(req: NextRequest, { params }: PageProps) {
  const { id } = await params;
  const response = await globalApi.get(`/reviews/teacher/${id}`);
  return NextResponse.json(response.data);
}
