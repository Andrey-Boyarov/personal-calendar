import UserNameButton from "./UserNameButton";
import UnAuthorizeButton from "./UnAuthorizeButton";

export default function HeaderTail(){
    return(
        <div>
            <UserNameButton/>
            <UnAuthorizeButton/>
        </div>
    );
}