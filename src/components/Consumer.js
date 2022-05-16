import Separator from "./header/Separator";
import Header from "./header/Header";
import Body from "./body/Body";
import SearchBar from "./body/SearchBar";

export default function Consumer() {
    return(
        <div>
            <Separator/>
            <Header/>
            <Separator/>
            <Body/>
        </div>
    );
}