import {useState} from "react";

let defaultUserContext = {
    username: "",
    accesstoken: "",
    refreshtoken: "",
    roles: []
}

const [userContext, setUserContext] = useState(defaultUserContext)

export default {userContext, setUserContext}