import axios from 'axios';
import { getUserLocalStorage } from '../context/util';

const apiGold = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

apiGold.interceptors.request.use(
    (config) => { 
        const user = getUserLocalStorage();
        config.headers.Authorization = `Bearer ${user?.token}`;

        return config; 
    },
    (error) => {
        return Promise.reject(error)
     }
)

export default apiGold