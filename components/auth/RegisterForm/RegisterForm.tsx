'use client';
import Link from 'next/link';
import css from './RegisterForm.module.css';
import { useState } from 'react';

const RegisterForm = () => {
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
          <h2 className={css['form-register-title']}>Registration</h2>
          <p className={css['form-register-content']}>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
        </div>

        <input
          className={css['form-register-input']}
          name="Name"
          placeholder="Name"
          type="text"
          required
        />
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
          Sign Up
        </button>

        <p className={`${css['form-register-content']} ${css['footer']}`}>
          Already have an account?{' '}
          <Link href="/auth/login" className={css['form-register-link']}>
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
