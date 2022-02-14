import "../../styles/UnAuthorizeButton.css"
import Leave from "../../utils/Leave";

export default function UnAuthorizeButton(){
    return(
        <button className={"UnAuthorizeButton"} onClick={Leave}>
            Leave
        </button>
    );
}