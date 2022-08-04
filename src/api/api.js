import axios from 'axios';

const quoteApi = axios.create({
  baseURL: 'https://api.quotable.io',
});

const catApi = axios.create({
  baseURL: 'https://api.thecatapi.com',
});

const dogApi = axios.create({
  baseURL: 'https://dog.ceo/api',
});

export { quoteApi, catApi, dogApi };
