import Link from 'next/link';
import css from './HomeDetalis.module.css';

const HomeDetalis = () => {
  return (
    <div className={css['home-detalis']}>
      <div className={css['home-cont-content']}>
        <h1 className={css['home-title']}>
          Unlock your potential with the best{' '}
          <span className={css['home-span']}>language</span> tutors
        </h1>
        <p className={css['home-content']}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
      </div>
      <div className={css['home-link-div']}>
        <Link href="/teachers" className={css['home-link']}>
          Get started
        </Link>
      </div>
    </div>
  );
};

export default HomeDetalis;
