import MainBlock from "./MainBlock";
import EventListDay from "./EventListDay";
import {useEffect, useState} from "react";
import "../../styles/LeftContainer.css"
import CreateEventModal from "../modals/CreateEventModal";

export default function LeftContainer(){
    const [date, setDate] = useState()
    const [modalActive, setModalActive] = useState();
    useEffect(() => console.log(date), [date])

    return(
        <div className={"LeftContainer"}>
            <MainBlock date={date} setDate={setDate}/>
            <div className="btn-wrap">
                <button className="create-event-btn" onClick={() => setModalActive(true)}>Create Event</button>
            </div>
            <EventListDay day={date}/>
            <CreateEventModal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}