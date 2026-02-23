'use client';

import { useEffect, type ReactNode } from 'react';
import { useAuthStore } from '@/store/authStore';
import { me, refresh } from '@/services/auth';

interface AuthInitializerProps {
  children: ReactNode;
}

const AuthInitializer = ({ children }: AuthInitializerProps) => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const getUserData = async () => {
      if (!user) {
        await refresh();
        const userData = await me();
        console.log(userData);

        if (userData) {
          setUser(userData);
        }
      }
    };
    getUserData();
  }, [user]);

  return <>{children}</>;
};

export default AuthInitializer;
