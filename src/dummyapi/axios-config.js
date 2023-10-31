// src/api/axios-config.js
import axios from 'axios';
import store from '@/store'; 

const axiosInstance = axios.create({
    baseURL: 'https://api.example.com',
});
globallyglobally
axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = store.state.token; 
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
