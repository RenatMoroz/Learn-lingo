import axios from 'axios';

export const nextApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  withCredentials: true,
});
