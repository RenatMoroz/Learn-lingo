import Image from 'next/image';
import css from './HomeImage.module.css';

const HomeImage = () => {
  return (
    <div className={css['image-wrapper']}>
      {/* ЭТОТ БЛОК ДОЛЖЕН БЫТЬ ЗДЕСЬ ДЛЯ РАБОТЫ ЦВЕТА */}
      <svg
        style={{ width: 0, height: 0, position: 'absolute' }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="css-grad-mac" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#eeb055" />
            <stop offset="100%" stopColor="#d08f38" />
          </linearGradient>
          <linearGradient id="css-grad-apple" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbe9ba" />
            <stop offset="100%" stopColor="#e7c885" />
          </linearGradient>
        </defs>
      </svg>

      <div className={css['character-container']}>
        <Image
          src="/girl.png"
          alt="Tutor"
          width={339}
          height={339}
          className={css['girl-img']}
        />

        <svg className={css['mac-icon']} width={360} height={176}>
          <use href="/icons-sprite.svg#icon-mac"></use>
        </svg>
      </div>
    </div>
  );
};

export default HomeImage;
