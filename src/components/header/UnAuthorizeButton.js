import "../../styles/UnAuthorizeButton.css"
import Leave from "../../utils/Leave";
import {Link} from "react-router-dom";

export default function UnAuthorizeButton(){
    return(
        <div className={"UnAuthorizeButton"}>
                <Link to='/login'>Leave</Link>
        </div>
    );
}