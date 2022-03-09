import {useEffect, useState} from "react";
import axios from "axios";
import buildUrl from "../../utils/BuildUrl";
import EventItem from "./EventItem";
import "../../styles/EventList.css"

export default function EventListAll(){
    const [listOfEvents, setListOfEvents] = useState([{id: 1, label: "event", date: "12.12.1212"}, {id: 2, label: "event", date: "12.12.1212"}])

    useEffect(() => {
        axios
            .get(buildUrl("getAllEvents"))
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