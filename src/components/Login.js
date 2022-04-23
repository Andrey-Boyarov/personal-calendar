import {Link} from "react-router-dom";

export default function Login(){
    return(
        <div>
            <text>Welcome to Calendar</text>
            <input type="text" placeholder="your login"/>
            <input type="password" placeholder="your password"/>
            <button>Sign in</button>
            <Link to="/register">Sign up</Link>
        </div>
    );
}