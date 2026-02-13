import RegisterForm from '@/components/auth/RegisterForm/RegisterForm';
import css from './page.module.css';

const Page = () => {
  return (
    <div className={css['page']}>
      <RegisterForm />
    </div>
  );
};

export default Page;
