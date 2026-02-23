import axios from 'axios';

export const nextApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001',
  withCredentials: true,
});
