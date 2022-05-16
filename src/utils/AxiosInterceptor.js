import axios from "axios";
import Cookies from "js-cookie"
export const API_URL = 'http://localhost:8041'


/*const $host = axios.create({
    baseURL: API_URL
})
const $authHost = axios.create({
    baseURL: API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}*/

const axiosInstance = axios.create({
    baseURL: API_URL
})

axiosInstance.interceptors.request.use((config) => {
    const authToken = Cookies.get("auth-token");
    if(authToken) {
        config.headers.authorization = `Bearer ${authToken}`;
    }
    return config;
}, (error => Promise.reject(error)))

export default axiosInstance;