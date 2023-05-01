import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://localhost:8088/api',
});

export default axiosInstance;