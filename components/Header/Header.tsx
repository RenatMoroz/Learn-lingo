import css from './Header.module.css';
import HeaderAuth from './HeaderAuth/HeaderAuth';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';

const Header = () => {
  return (
    <div className={css['header']}>
      <HeaderLogo />
      <HeaderNav />
      <HeaderAuth />
    </div>
  );
};

export default Header;
