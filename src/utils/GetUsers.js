import axios from "axios";
import buildUrl from "./BuildUrl";

function request(users, prop){
    axios
        .get(buildUrl("getUsers") + "/" + prop)
        .then(result => users = result)
}

export default function GetUsers(prop){
    let result
    request(result, prop)
    return result
}