import { Suspense } from 'react';
import Teachers from '@/components/Teachers/Teachers';
import css from './Page.module.css';

const Page = () => {
  return (
    <div className={css['page']}>
      <Suspense fallback={<p>Loading...</p>}>
        <Teachers />
      </Suspense>
    </div>
  );
};

export default Page;
