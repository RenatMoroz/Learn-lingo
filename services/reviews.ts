import { Review } from '@/types/reviews';
import { nextApi } from './serverConfig';

export async function getTeachersReviews(id: string) {
  const response = await nextApi.get<Review[]>(`/reviews/teacher/${id}`);
  return response.data;
}
