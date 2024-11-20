import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  timeout: 10000, // Timeout opcional
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error('Token expirado ou inválido. Redirecionando para login...');
    }

    return Promise.reject(error);
  }
);

export default api;
