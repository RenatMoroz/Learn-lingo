'use client';
import type { ChangeEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import css from './FiltersForm.module.css';

const FiltersForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateSearchParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const query = params.toString();
    router.push(`${pathname}?${query}`);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateSearchParam(name, value);
  };

  const languageValue = searchParams.get('languages') ?? '';
  const levelValue = searchParams.get('levels') ?? '';
  const priceValue = searchParams.get('price_per_hour') ?? '';

  const levels = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper-Intermediate',
    'C1 Advanced',
    'C2 Proficient',
  ];
  const prices = ['20', '30', '40'];

  return (
    <div className={css['filtersForm']}>
      <div className={css['field']}>
        <label className={css['fieldLabel']} htmlFor="languages">
          Languages
        </label>
        <select
          id="languages"
          className={`${css['select']} ${css['selectLanguage']}`}
          name="languages"
          value={languageValue}
          onChange={handleFilterChange}
        >
          <option value="">Language</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="French">French</option>
          <option value="Mandarin Chinese">Mandarin Chinese</option>
          <option value="Spanish">Spanish</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Italian">Italian</option>
          <option value="Korean">Korean</option>
        </select>
      </div>

      <div className={css['field']}>
        <label className={css['fieldLabel']} htmlFor="levels">
          Level of knowledge
        </label>
        <select
          id="levels"
          className={`${css['select']} ${css['selectLevel']}`}
          name="levels"
          value={levelValue}
          onChange={handleFilterChange}
        >
          <option value="">Level</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div className={css['field']}>
        <label className={css['fieldLabel']} htmlFor="price_per_hour">
          Price
        </label>
        <select
          id="price_per_hour"
          className={`${css['select']} ${css['selectPrice']}`}
          name="price_per_hour"
          value={priceValue}
          onChange={handleFilterChange}
        >
          <option value="">Price</option>
          {prices.map((price) => (
            <option key={price} value={price}>
              {price} $
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FiltersForm;
