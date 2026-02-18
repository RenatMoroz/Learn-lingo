'use client';

import Link from 'next/link';
import css from './HeaderNav.module.css';
import { useAuthStore } from '@/store/authStore';

const HeaderNav = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <nav className={css['header-nav']}>
      <ul className={css['header-items']}>
        <li className={css['header-list-item']}>
          <Link href="/" className={css['header-link']}>
            Home
          </Link>
        </li>
        <li className={css['header-list-item']}>
          <Link href="/teachers" className={css['header-link']}>
            Teachers
          </Link>
        </li>
        {user && (
          <li className={css['header-list-item']}>
            <Link href="/favorites" className={css['header-link']}>
              Favorites
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default HeaderNav;
