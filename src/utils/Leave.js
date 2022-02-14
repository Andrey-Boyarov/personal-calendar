import axios from "axios";
import buildUrl from "./BuildUrl";
import AuthModal from "../components/modals/AuthModal";

export default function Leave(){
    axios
        .get(buildUrl("leave"))
    return (AuthModal);
}