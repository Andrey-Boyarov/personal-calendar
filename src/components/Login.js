import {Link} from "react-router-dom";

export default function Login(){
    return(
        <div>
            <text>Welcome to Calendar</text>
            <input type="text" placeholder="your login"/>
            <input type="password" placeholder="your password"/>
            <button>SignIn</button>
            <Link to="/register">register</Link>
        </div>
    );
}