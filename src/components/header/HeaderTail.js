import UserNameButton from "./UserNameButton";
import UnAuthorizeButton from "./UnAuthorizeButton";
import SwitchRole from "../../utils/SwitchRole";



export default function HeaderTail(){
    return(
        <div className={"HeaderTail"}>
            <UserNameButton/>
            <UnAuthorizeButton/>

        </div>
    );
}