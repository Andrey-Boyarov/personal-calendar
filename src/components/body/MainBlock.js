import CalendarContainer from "./CalendarContainer";
import CalendarSideBar from "./CalendarSideBar";

export default function MainBlock({date, setDate}){
    return(
        <div className={"MainBlock"}>
            <CalendarContainer date={date} setDate={setDate}/>
            <CalendarSideBar state={date}/>
        </div>
    );
}