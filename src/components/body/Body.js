import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import "../../styles/Body.css"


export default function Body(){
    return (
        <div className={"Body"}>
            <LeftContainer/>
            <RightContainer/>
        </div>
    );
}