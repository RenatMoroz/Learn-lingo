'use client';
import Link from 'next/link';
import css from './LoginForm.module.css';
import { useState } from 'react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className={css['register-container']}>
      <form
        className={css['form-register']}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={css['form-register-text']}>
          <h2 className={css['form-register-title']}>Log In</h2>
          <p className={css['form-register-content']}>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
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
