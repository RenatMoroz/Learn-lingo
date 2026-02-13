import css from './HomeStats.module.css';

const HomeStats = () => {
  return (
    <ul className={css['home-stats']}>
      <li className={css['items-list']}>
        <p className={css['item-title']}>32,000 +</p>
        <p className={css['item-content']}>Experienced tutors</p>
      </li>
      <li className={css['items-list']}>
        <p className={css['item-title']}>300,000 +</p>
        <p className={css['item-content']}>5-star tutor reviews</p>
      </li>
      <li className={css['items-list']}>
        <p className={css['item-title']}>120 +</p>
        <p className={css['item-content']}>Subjects taught</p>
      </li>
      <li className={css['items-list']}>
        <p className={css['item-title']}>200 +</p>
        <p className={css['item-content']}>Tutor nationalities</p>
      </li>
    </ul>
  );
};

export default HomeStats;
