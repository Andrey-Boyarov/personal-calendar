import axios from "axios";
import {useHistory, useLocation} from "react-router";
import buildUrl from "./BuildUrl";

export default function SwitchRole(){
    const location = useLocation();
    if(window.location.pathname === "/api/consumer") {
        axios
            .get(buildUrl("switchToCreator"))
    } else {
        axios
            .get(buildUrl("switchToConsumer"))
    }
}