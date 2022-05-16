import {useState} from "react";
import GetUsers from "../utils/GetUsers";
import TargetUser from "./Admin/TargetUser";
import SearchBar from "./body/SearchBar";

export default function Admin(){
    const {searchProp, setSearchProp} = useState()

    return(
        <div>
            <SearchBar/>
            {/*<div>{GetUsers(searchProp).map(user =>
                <div>
                    <TargetUser userName={user.userName} userRoles={user.userRoles}/>
                </div>)}
            </div>*/}
        </div>
    )
}