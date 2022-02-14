import buildUrl from "../../utils/BuildUrl";

export default function EventItem(props){
    const id = props.id
    const label = props.label
    const date = props.date
    return(
        <li onClick={buildUrl("getEventById") + `/${id}`}>{date + ": " + label}</li>
    );
}