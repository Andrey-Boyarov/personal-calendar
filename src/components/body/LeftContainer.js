import MainBlock from "./MainBlock";
import EventListDay from "./EventListDay";
import {useEffect, useState} from "react";
import "../../styles/LeftContainer.css"

export default function LeftContainer(){
    const [date, setDate] = useState()

    useEffect(() => console.log(date), [date])

    return(
        <div className={"LeftContainer"}>
            <MainBlock date={date} setDate={setDate}/>

            <EventListDay day={date}/>
        </div>
    );
}