import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import "../../styles/Body.css"
import SwitchRole from "../../utils/SwitchRole";

function SwitchButton() {
    return (
        <div className={"switch-btn"} onClick={SwitchRole}>
            Switch Role
        </div>
    );
}

export default function Body(){
    return (
        <div className={"Body"}>
            <LeftContainer/>
            <RightContainer/>
            <SwitchButton/>
        </div>
    );
}