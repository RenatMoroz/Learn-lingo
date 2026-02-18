'use client';
import Image from 'next/image';
import css from './LessonModal.module.css';
import { Teacher } from '@/types/teacher';

interface TeacherProps {
  teacher: Teacher;
}
const LessonModal = ({ teacher }: TeacherProps) => {
  return (
    <div className={css['lesson-modal']}>
      <div className={css['lesson-content']}>
        <form className={css['form']}>
          <div className={css['lesson-group']}>
            <h2 className={css['title']}>Book trial lesson</h2>
            <p className={css['description']}>
              Our experienced tutor will assess your current language level,
              discuss your learning goals, and tailor the lesson to your
              specific needs.
            </p>
          </div>
          <div className={css['teacher-img-block']}>
            <Image
              src={teacher.avatar_url}
              alt={`${teacher.name} ${teacher.surname}`}
              className={css['teacherImage']}
              width={96}
              height={96}
              unoptimized
              loader={({ src }) => src}
            />
            <div>
              <h3 className={css['teacher']}>Your teacher</h3>
              <p className={css['teacher-name']}>
                {teacher.name} {teacher.surname}
              </p>
            </div>
          </div>
          <div className={css['radio-section']}>
            <h3 className={css['radio-title']}>
              What is your main reason for learning English?
            </h3>
            <ul className={css['radio-list']}>
              {[
                { id: 'career', label: 'Career and business' },
                { id: 'kids', label: 'Lesson for kids' },
                { id: 'abroad', label: 'Living abroad' },
                { id: 'exams', label: 'Exams and coursework' },
                { id: 'hobby', label: 'Culture, travel or hobby' },
              ].map((item) => (
                <li key={item.id}>
                  <label className={css['radio-label']}>
                    <input
                      type="radio"
                      name="reason"
                      value={item.id}
                      className={css['real-radio']}
                    />
                    <span className={css['custom-radio']}></span>
                    <span className={css['label-text']}>{item.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className={css['inputs-wrapper']}>
            <input
              className={css['input']}
              name="FullName"
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              className={css['input']}
              name="Email"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className={css['input']}
              name="Phone"
              type="tel"
              placeholder="Phone Number"
              required
            />
          </div>
          <button className={css['submit-btn']} type="submit">
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default LessonModal;
