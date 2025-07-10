import axios from 'axios';
import { useAuthStore } from '../../auth/stores/authStore';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosClient.defaults.headers.common['Authorization'];
  }
};

axiosClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
