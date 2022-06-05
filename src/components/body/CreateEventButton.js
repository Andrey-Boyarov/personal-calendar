import {useState} from "react";
import CreateEventModal from "../modals/CreateEventModal";
import axios from "axios";
import buildUrl from "../../utils/BuildUrl";
import Auth from "../../utils/Auth";

export default function CreateEventButton () {

    const [modalActive, setModalActive] = useState();

    return (
        <div>
            <div className="btn-wrap">
                <button className="create-event-btn" onClick={() => setModalActive(true)}>Create Event</button>
            </div>
            <div>
                <CreateEventModal active={modalActive} setActive={setModalActive}/>
            </div>
        </div>

    )
}