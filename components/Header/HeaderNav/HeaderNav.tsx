import Link from 'next/link';
import css from './HeaderNav.module.css';

const HeaderNav = () => {
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
      </ul>
    </nav>
  );
};

export default HeaderNav;
