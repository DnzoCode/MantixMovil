import { useAuthStore } from "@/stores/auth/authStore";
import axios, { AxiosInstance } from "axios";

const createServerInstance = (): AxiosInstance => {
  const {authUser} = useAuthStore()
  const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      if (typeof window !== 'undefined') {
        const accessToken = authUser;
        config.headers.Authorization = accessToken ? `Token ${accessToken.token}` : 'Token ';
      }
      
      return config
    },
    (error) => Promise.reject(error)
  )
  return axiosInstance;
};

const serverInstance = createServerInstance();

export default serverInstance;
