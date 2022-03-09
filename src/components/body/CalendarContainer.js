import CalendarSideBar from "./CalendarSideBar";
import MonthTitle from "./MonthTitle";
import CalendarHolder from "./CalendarHolder";

export default function CalendarContainer({date, setDate}){
    return(
        <div className={"CalendarContainer"}>
            <MonthTitle/>
            <CalendarHolder date={date} setDate={setDate}/>
        </div>
    );
}