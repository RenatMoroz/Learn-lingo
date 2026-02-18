'use client';

import Link from 'next/link';
import css from './HeaderAuth.module.css';
import { useAuthStore } from '@/store/authStore';
import LogoutButton from '@/components/LogoutButton';

const HeaderAuth = () => {
  const user = useAuthStore((state) => state.user);

  if (user) {
    return (
      <div className={css['header-auth']}>
        <span className={css['header-login']}>
          {user.name ?? user.email ?? 'Profile'}
        </span>
        <LogoutButton />
      </div>
    );
  }

  return (
    <div className={css['header-auth']}>
      <Link href="/auth/login" className={css['header-login-link']}>
        <div className={css['header-auth-svg']}>
          <svg width={20} height={20} className={css['auth-svg']}>
            <use href="/icons-sprite.svg#icon-log-in-01"></use>
          </svg>
        </div>
        <span className={css['header-login']}>Log in</span>
      </Link>
      <Link href="/auth/register" className={css['header-register-link']}>
        <span>Registration</span>
      </Link>
    </div>
  );
};

export default HeaderAuth;
