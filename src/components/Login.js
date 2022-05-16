import {Link} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie"

export default function Login(){

    const auth = () => {
        axios.post("http://localhost:3005/login", {username: "root", password: "root" })
            .then(response => {
                //get token from response
                const token  =  response.data.token;

                //set JWT token to local
                localStorage.setItem("token", token);

                //set token to axios common header
                Cookies.set("auth-token", token);

//redirect user to home page
                window.location.href = '/'
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <text>Welcome to Calendar</text>
            <input type="text" placeholder="your login"/>
            <input type="password" placeholder="your password"/>
            <button onClick={auth}>Sign in</button>
            <Link to="/register">Sign up</Link>
        </div>
    );
}