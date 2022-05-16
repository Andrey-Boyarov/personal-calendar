import {useState, useEffect} from "react";
import buildUrl from "../../utils/BuildUrl";
import axios from "axios";

const filterUsers = (searchText, listOfUsers) => {
    if(!searchText) {
        return null;
    }
    return listOfUsers.filter(({username}) => username.toLowerCase().includes(searchText.toLowerCase()));
}

export default function SearchBar () {

    const [users, setUsers] = useState([])
    const getUsers = () => {
        axios.get(buildUrl("userList"))
            .then((response) => {
                setUsers(response.data)
            })
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [userList, setUserList] = useState(users);

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredUsers = filterUsers(searchTerm, users);
            setUserList(filteredUsers);
        }, 300);
        return () => clearTimeout(Debounce);
    }, [searchTerm]);

    return (
        <div className="SearchBar">
            <input
                value={searchTerm}
                autoFocus
                type="text"
                autoComplete="off"
                placeholder="Search for a user by nickname"
                className="SearchInput"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="userList">
                {userList.map((user, index) => {
                    return <li key={index} className="filteredUserList"></li>
                })}
            </ul>
        </div>
    );
}