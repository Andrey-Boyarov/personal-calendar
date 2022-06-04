import UserNameButton from "./UserNameButton";
import UnAuthorizeButton from "./UnAuthorizeButton";



export default function HeaderTail(){
    return(
        <div className={"HeaderTail"}>
            <UserNameButton/>
            <UnAuthorizeButton/>

        </div>
    );
}