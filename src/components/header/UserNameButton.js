import Auth from "../../utils/Auth";
import "../../styles/UserNameButton.css"

export default function UserNameButton(){
    const userName = Auth().userName

    return(
        <div className={"UserNameButton"}>
            {userName === "" ? "not identified" : userName}
        </div>
    );
}