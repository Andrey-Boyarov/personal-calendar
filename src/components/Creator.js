import Separator from "./header/Separator";
import Header from "./header/Header";
import Body from "./body/Body";
import {Link} from "react-router-dom";


function SwitchBtn() {
    return (
        <div className={"switch-btn"}>
            <Link to='/api/consumer'>Switch Role</Link>
        </div>
    );
}

export default function Creator(){
    return(
        <div>
            <Separator/>
            <Header/>
            <Separator/>
            <Body/>
        </div>
    );
}