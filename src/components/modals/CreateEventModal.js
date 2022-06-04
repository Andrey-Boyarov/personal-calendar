import axios from "axios";
import {API_URL} from "../../utils/AxiosInterceptor";


const CreateEventModal = ({active, setActive}) => {


    var eventDate = "";
    var eventText = "";

    function createNewEvent(eventDate, eventText) {

        return axios.post(API_URL + "newEvent", {
            eventDate,
            eventText,
        });
    }

    return (
        <div className= {active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className= "modal__content" onClick={e => e.stopPropagation()}>
                <form className={"modal-form"} action="">
                    <div>
                        <input id= "eventDate" className={"content-date"} type="date"/>
                    </div>
                    <div className={"content-text-border"}>
                        <input id= "eventText" className={"content-text"} type="text"/>
                    </div>
                    <div className={"content-btn"}>
                        <button className={"create-event-btn-submit"} onClick={() => {
                            eventDate = document.getElementById('eventDate').value;
                            eventText  = document.getElementById('eventText').value;
                            createNewEvent(eventDate, eventText);
                        }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateEventModal;