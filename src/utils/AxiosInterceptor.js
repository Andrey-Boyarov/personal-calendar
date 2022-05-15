import axios from "axios";
import server from "./server.json"

export const API_URL = 'http://localhost:8041'


const $host = axios.create({
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
}

