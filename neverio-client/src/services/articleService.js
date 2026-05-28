import axios from 'axios';
import constants from '../../constants';

const API = axios.create({
  baseURL: `${constants.HOST}/articles`,
});

// Automatically inject JWT Bearer Token into authorization headers
API.interceptors.request.use((config) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
  } catch (error) {
    console.error("Error reading token from localStorage:", error);
  }
  return config;
});

// Fetch articles
export const getArticles = () => API.get('/');
export const fetchArticles = getArticles;
export const fetchArticleById = (id) => API.get(`/${id}`);

// Create, Update, Delete articles
export const createArticle = (articleData) => API.post('/', articleData);
export const updateArticle = (id, articleData) => API.put(`/${id}`, articleData);
export const deleteArticle = (id) => API.delete(`/${id}`);
