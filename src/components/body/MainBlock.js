import CalendarContainer from "./CalendarContainer";
import CalendarSideBar from "./CalendarSideBar";

export default function MainBlock({curDay, setCurDay}){
    return(
        <div className={"MainBlock"}>
            <CalendarContainer state={{curDay, setCurDay}}/>
            <CalendarSideBar state={curDay}/>
        </div>
    );
}