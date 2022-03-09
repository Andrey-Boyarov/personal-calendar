import RightTitle from "./RightTitle";
import EventListAll from "./EventListAll";
import "../../styles/RightContainer.css"

export default function RightContainer(){
    return(
        <div className={"RightContainer"}>
            <RightTitle/>
            <EventListAll/>
        </div>
    );
}