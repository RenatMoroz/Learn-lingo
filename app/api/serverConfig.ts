import axios from 'axios';

export const globalApi = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
});
