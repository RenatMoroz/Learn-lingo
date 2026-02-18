'use client';
import { getTeachersReviews } from '@/services/reviews';
import css from './ReviewList.module.css';
import { useQuery } from '@tanstack/react-query';
interface ReviewListProps {
  id: string;
}
const ReviewList = ({ id }: ReviewListProps) => {
  const revieQuery = useQuery({
    queryKey: ['teacherReviews', id],
    queryFn: () => getTeachersReviews(id),
  });
  const reviews = revieQuery.data || [];
  return (
    <div className={css['reviewList']}>
      {reviews.map((review) => (
        <div key={review._id} className={css['reviewItem']}>
          <div className={css['reviewBlock']}>
            <h4 className={css['reviewName']}>{review.reviewer_name}</h4>
            <div className={css['statItem']}>
              <svg
                className={css['starIcon']}
                viewBox="0 0 24 24"
                width={16}
                height={16}
              >
                <path
                  d="M12 3.5L14.9 9.4L21.4 10.3L16.7 14.9L17.8 21.4L12 18.3L6.2 21.4L7.3 14.9L2.6 10.3L9.1 9.4L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
              <p>{review.reviewer_rating}.0</p>
            </div>
          </div>
          <p className={css['reviewComment']}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
