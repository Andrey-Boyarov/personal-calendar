import Auth from "../../utils/Auth";

export default function UserNameButton(){
    const userName = Auth().userName

    return(
        <div>
            {userName === "" ? "not identified" : userName}
        </div>
    );
}