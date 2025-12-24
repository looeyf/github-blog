import axios from 'axios';

const FIVE_SECONDS = 5000;

const api = axios.create({
  timeout: FIVE_SECONDS,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
