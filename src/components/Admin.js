import {useState} from "react";
import GetUsers from "../utils/GetUsers";
import TargetUser from "./Admin/TargetUser";

export default function Admin(){
    const {searchProp, setSearchProp} = useState()

    return(
        <div>
            {/*todo here must be search*/}
            <div>{GetUsers(searchProp).map(user =>
                <div>
                    <TargetUser userName={user.userName} userRoles={user.userRoles}/>
                </div>)}
            </div>
        </div>
    )
}