import Separator from "./header/Separator";
import Header from "./header/Header";
import Body from "./body/Body";


export default function Creator(){
    return(
        <div>
            <Separator/>
            <Header/>
            <Separator/>
            <Body/>
        </div>
    );
}