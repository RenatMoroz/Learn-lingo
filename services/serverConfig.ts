import axios from 'axios';

const serverOrigin =
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
  'http://localhost:3000';

export const nextApi = axios.create({
  baseURL:
    typeof window === 'undefined' ? `${serverOrigin}/api` : '/api',
  withCredentials: true,
});
