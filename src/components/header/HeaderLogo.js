import icon from "../../images/calendar-item-image.svg"
import "../../styles/HeaderLogo.css"

export default function HeaderLogo(){
    return(
        <div className={"HeaderLogo"}>
            <img src={icon}/>
            <div className={"text"}>Calendar</div>
        </div>
    );
}