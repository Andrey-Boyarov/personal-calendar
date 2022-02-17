import CalendarSideBar from "./CalendarSideBar";
import MonthTitle from "./MonthTitle";

export default function CalendarContainer({curDay, setCurDay}){
    return(
        <div className={"CalendarContainer"}>
            <MonthTitle/>

        </div>
    );
}