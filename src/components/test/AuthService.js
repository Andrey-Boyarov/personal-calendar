import axios from "axios";
const API_URL = "http://localhost:8041/login";
class AuthService {
    login(username, password) {
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        return axios
            .post(API_URL,
                params/*,
                {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                }*/)
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
export default new AuthService()