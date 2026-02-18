'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import TeacherCard from '@/components/Teachers/TeacherCard/TeacherCard';
import teachersCss from '@/components/Teachers/Teachers.module.css';
import { useAuthStore } from '@/store/authStore';
import { useFavoritesStore } from '@/store/favoritesStore';
import { getTeacherById } from '@/services/teachers';
import { Teacher } from '@/types/teacher';

const FavoritesPage = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const favorites = useFavoritesStore((state) => state.favorites);

  const favoriteIds = useMemo(() => [...new Set(favorites)], [favorites]);

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isLoadingTeachers, setIsLoadingTeachers] = useState(false);
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    if (!user) {
      setTeachers([]);
    }
  }, [user]);

  useEffect(() => {
    let isMounted = true;

    const verifyAuth = async () => {
      if (!user) {
        await checkAuth();
      }

      if (!isMounted) {
        return;
      }

      const nextUser = useAuthStore.getState().user;
      if (!nextUser) {
        router.replace('/auth/login');
        return;
      }

      setIsCheckingAuth(false);
    };

    void verifyAuth();

    return () => {
      isMounted = false;
    };
  }, [user, checkAuth, router]);

  useEffect(() => {
    if (isCheckingAuth || !useAuthStore.getState().user) {
      return;
    }

    let isMounted = true;

    const loadFavorites = async () => {
      if (favoriteIds.length === 0) {
        setTeachers([]);
        return;
      }

      setIsLoadingTeachers(true);

      try {
        const results = await Promise.allSettled(
          favoriteIds.map((id) => getTeacherById(id))
        );

        if (!isMounted) {
          return;
        }

        const resolvedTeachers = results
          .filter(
            (result): result is PromiseFulfilledResult<Teacher> =>
              result.status === 'fulfilled'
          )
          .map((result) => result.value);

        setTeachers(resolvedTeachers);
      } finally {
        if (isMounted) {
          setIsLoadingTeachers(false);
        }
      }
    };

    void loadFavorites();

    return () => {
      isMounted = false;
    };
  }, [favoriteIds, isCheckingAuth]);

  if (isCheckingAuth) {
    return null;
  }

  return (
    <div className={teachersCss.teachers}>
      {isLoadingTeachers && <p>Loading...</p>}

      {!isLoadingTeachers && teachers.length === 0 && (
        <p>You have no favorite teachers yet.</p>
      )}

      <ul>
        {teachers.map((teacher) => (
          <TeacherCard key={teacher._id} teacher={teacher} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
