import MainBlock from "./MainBlock";
import EventListDay from "./EventListDay";
import {useEffect, useState} from "react";
import "../../styles/LeftContainer.css"
import CreateEventModal from "../modals/CreateEventModal";
import CreateEventButton from "./CreateEventButton";
import Auth from "../../utils/Auth";

export default function LeftContainer(props){
    const [date, setDate] = useState()
    useEffect(() => console.log(date), [date])

    const isLoggedIn = true;

    const userRole = Auth().userRole;

    return(
        <div className={"LeftContainer"}>
            <MainBlock date={date} setDate={setDate}/>
            {userRole !== "" ? (
                <CreateEventButton/>
            ) : (
                <div></div>
            )
            }
            <EventListDay day={date}/>
        </div>
    );
}