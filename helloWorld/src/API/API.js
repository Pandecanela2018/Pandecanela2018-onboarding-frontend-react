import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    accept: "*/*",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["x-request-id"] = crypto.randomUUID();
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
