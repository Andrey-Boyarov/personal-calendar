import axios from "axios";
import {useState} from "react";
import buildUrl from "./BuildUrl";

export default function Auth(){
    const [auth, setAuth] = useState({
        login: "",
        userName: "",
    })

    console.log((auth.login === "" && auth.userName === "")
        ? "not identified"
        : `authorized as: ${auth.login}`)

    if (auth.login === "" && auth.userName === "") {
        axios.get(buildUrl("authRequest"))
            .then(data => {
                setAuth({
                    login: data["login"],
                    userName: data["userName"]
                })
            })
    }
    return auth
}