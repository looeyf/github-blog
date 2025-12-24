import axios from 'axios';

const FIVE_SECONDS = 5000;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: FIVE_SECONDS,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
