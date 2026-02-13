'use client';
import Image from 'next/image';
import css from './TeacherCard.module.css';
import { useState } from 'react';
import { Teacher } from '@/types/teacher';
import Link from 'next/link';
import { useFavoritesStore } from '@/store/favoritesStore';

interface TeacherProps {
  teacher: Teacher;
}

const TeacherCard = ({ teacher }: TeacherProps) => {
  const [showMore, setShowMore] = useState(false);
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = favorites.includes(teacher._id);

  const handleReadMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className={css['teacherCard']}>
      <div className={css['teacherAvatar']}>
        <div className={css['avatarBorder']}>
          <Image
            src={teacher.avatar_url}
            alt={`${teacher.name} ${teacher.surname}`}
            className={css['teacherImage']}
            width={96}
            height={96}
            unoptimized
            loader={({ src }) => src}
          />
        </div>
        <span className={css['avatarDot']} />
      </div>

      <div className={css['teacherContent']}>
        <div className={css['headerRow']}>
          <div className={css['nameBlock']}>
            <p className={css['label']}>Languages</p>
            <h2 className={css['name']}>
              {teacher.name} {teacher.surname}
            </h2>
          </div>

          <div className={css['statsRow']}>
            <div className={css['statItem']}>
              <svg className={css['bookIcon']}>
                <use href="/icons-sprite.svg#icon-book-open-01" />
              </svg>
              <p>Lessons online</p>
            </div>

            <div className={`${css['statItem']} ${css['withDivider']}`}>
              <p>Lessons done: {teacher.lessons_done}</p>
            </div>

            <div className={`${css['statItem']} ${css['withDivider']}`}>
              <svg
                className={css['starIcon']}
                viewBox="0 0 24 24"
                width={16}
                height={16}
              >
                <path
                  d="M12 3.5L14.9 9.4L21.4 10.3L16.7 14.9L17.8 21.4L12 18.3L6.2 21.4L7.3 14.9L2.6 10.3L9.1 9.4L12 3.5Z"
                  fill="currentColor"
                />
              </svg>
              <p>Rating: {teacher.rating}</p>
            </div>

            <div className={`${css['statItem']} ${css['withDivider']}`}>
              <p>
                Price / 1 hour:{' '}
                <span className={css['price']}>{teacher.price_per_hour}$</span>
              </p>
            </div>

            <button
              className={css['favoriteButton']}
              type="button"
              aria-pressed={isFavorite}
              onClick={() => toggleFavorite(teacher._id)}
            >
              <svg
                className={`${css['heartIcon']} ${
                  isFavorite ? css['heartIconActive'] : ''
                }`}
              >
                <use href="/icons-sprite.svg#icon-Vector" />
              </svg>
            </button>
          </div>
        </div>

        <div className={css['details']}>
          <p>
            <span>Speaks:</span> {teacher.languages.join(', ')}
          </p>
          <p>
            <span>Lesson Info:</span> {teacher.lesson_info}
          </p>
          <p>
            <span>Conditions:</span> {teacher.conditions}
          </p>
        </div>

        <button className={css['readMoreButton']} onClick={handleReadMore}>
          {showMore ? 'Show less' : 'Read more'}
        </button>

        {showMore && <p className={css['experience']}>{teacher.experience}</p>}

        <ul className={css['levelsList']}>
          {teacher.levels.map((level, index) => (
            <li
              key={level}
              className={`${css['levelItem']} ${
                index === 0 ? css['levelItemPrimary'] : ''
              }`}
            >
              #{level}
            </li>
          ))}
        </ul>

        {showMore && (
          <Link className={css['bookButton']} href="/lesson">
            Book trial lesson
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeacherCard;
