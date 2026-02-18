import Link from 'next/link';
import css from './HeaderLogo.module.css';

const HeaderLogo = () => {
  return (
    <div className={css['header-logo']}>
      <div className={css['header-svg']}>
        <svg width={28} height={28}>
          <use href="/icons-sprite.svg#icon-ukraine"></use>
        </svg>
      </div>
      <Link href="/" className={css['header-title']}>
        LearnLingo
      </Link>
    </div>
  );
};

export default HeaderLogo;
