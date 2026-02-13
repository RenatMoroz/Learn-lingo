import css from './HeaderLogo.module.css';

const HeaderLogo = () => {
  return (
    <div className={css['header-logo']}>
      <div className={css['header-svg']}>
        <svg width={28} height={28}>
          <use href="/icons-sprite.svg#icon-ukraine"></use>
        </svg>
      </div>
      <h4 className={css['header-title']}>LearnLingo</h4>
    </div>
  );
};

export default HeaderLogo;
