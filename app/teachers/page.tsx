import Teachers from '@/components/Teachers/Teachers';
import css from './Page.module.css';

const Page = () => {
  return (
    <div className={css['page']}>
      <Teachers />
    </div>
  );
};

export default Page;
