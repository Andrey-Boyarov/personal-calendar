import {useEffect, useState} from "react";
import axios from "axios";
import buildUrl from "../../utils/BuildUrl";
import EventItem from "./EventItem";
import "../../styles/EventList.css"

export default function EventListDay(day){
    const [listOfEvents, setListOfEvents] = useState([{id: 3, label: "event", date: "12.12.1212"}, {id: 4, label: "event", date: "12.12.1212"}])

    useEffect(() => {
        axios
            .get(buildUrl("getEventsByDate") + `/${day}`)
            .then(data => setListOfEvents(data))
    })

    return(
        <ul className={"EventList"}>
            {
                listOfEvents.map(event =>
                    EventItem({id: event.id, label: event.label, date: event.date})
                )
            }
        </ul>
    );
}