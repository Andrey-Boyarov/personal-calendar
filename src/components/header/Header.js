import HeaderLogo from "./HeaderLogo"
import HeaderTail from "./HeaderTail"
import "../../styles/Header.css"
import "../../styles/HeaderTail.css"

export default function Header(){
    return (
        <div className={"Header"}>
            <HeaderLogo/>
            <HeaderTail/>
        </div>
    );
}