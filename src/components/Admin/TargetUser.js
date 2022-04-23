import TargetUserModal from "../modals/TargetUserModal";
import {useState} from "react";

export default function TargetUser({userName, userRoles}){
    const {showModal, setShowModal} = useState(false)

    return(
        <div>
            <text>Name: {userName}</text>
            <text>Roles: {userRoles}</text>
            <button onClick={setShowModal(true)}>Ban</button>
            <TargetUserModal
                show={showModal}
                onHide={() => setShowModal(false)}
            />
        </div>
    )
}