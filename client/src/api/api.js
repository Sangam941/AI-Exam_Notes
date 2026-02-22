import axios from 'axios';
export const baseUrl = import.meta.env.VITE_SERVER_URL

export const api = axios.create({
  baseURL: `${baseUrl}/api`,
  withCredentials: true
});

