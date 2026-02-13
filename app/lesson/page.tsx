import LessonModal from '@/components/LessonModal/LessonModal';
import css from './Page.module.css';

const Page = () => {
  return (
    <div className={css['page']}>
      <LessonModal />
    </div>
  );
};

export default Page;
