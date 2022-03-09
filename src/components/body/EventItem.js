import buildUrl from "../../utils/BuildUrl";
import "../../styles/EventItem.css"

export default function EventItem(props){
    const id = props.id
    const label = props.label
    const date = props.date
    return(
        <li className={"EventItem"} onClick={buildUrl("getEventById") + `/${id}`}>{date + ": " + label}</li>
    );
}