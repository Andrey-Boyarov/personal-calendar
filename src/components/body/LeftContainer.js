import MainBlock from "./MainBlock";
import EventListDay from "./EventListDay";
import {useState} from "react";

export default function LeftContainer(){
    const [curDay, setCurDay] = useState()

    return(
        <div className={"LeftContainer"}>
            <MainBlock state={{curDay, setCurDay}}/>
            <EventListDay day={curDay}/>
        </div>
    );
}