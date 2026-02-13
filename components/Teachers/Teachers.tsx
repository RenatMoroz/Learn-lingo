'use client';

import { useEffect } from 'react';
import TeacherCard from './TeacherCard/TeacherCard';
import css from './Teachers.module.css';
import FiltersForm from './FiltersForm/FiltersForm';
import { useSearchParams } from 'next/navigation';
import { useTeachersStore } from '@/store/useTeachersStore';

const Teachers = () => {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const { items, isLoading, fetchTeachers, hasMore, resetTeachers } =
    useTeachersStore();

  useEffect(() => {
    resetTeachers();
    fetchTeachers(false, params);
  }, [searchParams]);

  const handleLoadMore = () => {
    fetchTeachers(true, params);
  };

  return (
    <div className={css['teachers']}>
      <FiltersForm />

      <ul>
        {items.map((el) => (
          <TeacherCard key={el._id} teacher={el} />
        ))}
      </ul>

      {isLoading && <p>Loading...</p>}

      {!isLoading && hasMore && items.length > 0 && (
        <button className={css['btn-load-more']} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default Teachers;
