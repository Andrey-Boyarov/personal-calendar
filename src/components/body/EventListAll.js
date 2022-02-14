import {useEffect, useState} from "react";
import axios from "axios";
import buildUrl from "../../utils/BuildUrl";
import EventItem from "./EventItem";

export default function EventListAll(){
    const [listOfEvents, setListOfEvents] = useState()

    useEffect(() => {
        axios
            .get(buildUrl("getAllEvents"))
            .then(data => setListOfEvents(data))
    })

    return(
        <ul>
            {
                () => {
                    let list = listOfEvents;
                    list.map(event => EventItem({id: event.id, label: event.label, date: event.date}))
                    return list
                }
            }
        </ul>
    );
}