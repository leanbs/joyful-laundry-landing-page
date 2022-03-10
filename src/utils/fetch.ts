import axios from 'axios';

export const fetch = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
