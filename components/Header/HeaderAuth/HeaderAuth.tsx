import Link from 'next/link';
import css from './HeaderAuth.module.css';

const HeaderAuth = () => {
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
