import RightTitle from "./RightTitle";
import EventListAll from "./EventListAll";

export default function RightContainer(){
    return(
        <div className={"RightContainer"}>
            <RightTitle/>
            <EventListAll/>
        </div>
    );
}