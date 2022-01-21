import axios from 'axios';

export const hackerNews = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
  timeout: 2000,
});
