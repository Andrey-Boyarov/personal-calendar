import Calendar from "react-calendar";
import "../../styles/CalendarHolder.css"

export default function CalendarHolder({date, setDate}){

    return(
        <div className={"CalendarHolder"}>
            <Calendar value={date} onChange={setDate} locale={"eng"}/>
        </div>
    );
}