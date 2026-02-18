'use client';
import Link from 'next/link';
import css from './LoginForm.module.css';
import { useState } from 'react';
import { login } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { useAuthStore, type User } from '@/store/authStore';
import toast from 'react-hot-toast';

interface LoginResponse {
  user?: User;
  favorites?: string[];
  favoriteTeachers?: string[];
  id?: string;
  name?: string;
  email?: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const checkAuth = useAuthStore((state) => state.checkAuth);

  const handleClick = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('Email') as string;
    const password = formData.get('Password') as string;
    const data = { email, password };

    try {
      const response = (await login(data)) as LoginResponse;

      if (response?.user) {
        setUser({
          ...response.user,
          favorites:
            response.user.favorites ??
            response.favorites ??
            response.user.favoriteTeachers ??
            response.favoriteTeachers,
        });
      } else if (response?.id || response?.name || response?.email) {
        const { id, name, email } = response;
        setUser({ id, name, email });
      } else {
        await checkAuth();
      }

      toast.success('You have successfully logged in!');
      router.push('/');
    } catch (error: unknown) {
      console.error(error);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className={css['register-container']}>
      <form className={css['form-register']} onSubmit={handleSubmit}>
        <div className={css['form-register-text']}>
          <h2 className={css['form-register-title']}>Log In</h2>
          <p className={css['form-register-content']}>
            Welcome back! Please enter your credentials to access your account
            and continue your search for a teacher.
          </p>
        </div>

        <input
          className={css['form-register-input']}
          name="Email"
          placeholder="Email"
          type="email"
          required
        />

        <div style={{ position: 'relative' }}>
          <input
            className={css['form-register-input']}
            name="Password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            required
          />
          <svg
            key={showPassword ? 'eye' : 'eye-off'}
            width={20}
            height={20}
            className={css['form-register-svg']}
            onClick={handleClick}
          >
            <use
              href={
                showPassword
                  ? '/icons-sprite.svg#icon-eye'
                  : '/icons-sprite.svg#icon-eye-off'
              }
            ></use>
          </svg>
        </div>

        <button type="submit" className={css['submit-btn']}>
          Log In
        </button>

        <p className={`${css['form-register-content']} ${css['footer']}`}>
          Dont have an account yet?{' '}
          <Link href="/auth/register" className={css['form-register-link']}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
