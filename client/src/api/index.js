import axios from 'axios';

/* const url = 'http://localhost:5000/posts';
    export const fetchPosts = () => axios.get(url);
    export const createPost = (newPost) => axios.post(url, newPost);
    export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
    export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
    export const deletePost = (id) => axios.delete(`${url}/${id}`); */
// const API = axios.create({ baseURL: 'https://backend-memories-jwt.herokuapp.com/'});

// const API = axios.create({ baseURL: 'http://localhost:5500/' });

const API_URL = process.env.REACT_APP_API_URL || 'http://54.205.124.94:80/';
const API = axios.create({ baseURL: `${API_URL}` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

