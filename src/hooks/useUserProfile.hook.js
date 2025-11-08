import useLocalStorage from "./uselocalStorage.hook"
import { useEffect, useState, useRef } from "react"

function useUserProfile() {

    const [get, set] = useLocalStorage('users', []);
    const [users, setUsers] = useState([]);
    const usersRef = useRef(users)

    useEffect(() => {
        const users_for_storage = get();
        if (users)
            setUsers(users_for_storage);
    }, []);

    useEffect(() => {
        if (users.length){ 
            usersRef.current = users
            set(users);
        }
    }, [users]);

    const getUser = (name) => {
        if (!users)
            return
        
        const userID = users.findIndex(user => user.name == name);

        
        if (userID == -1)
            return;

        return users[userID];
    };


    const joinUser = (name) => {
        const user = getUser(name);

        if (!user) {
            setUsers(users => [...users, {name: name, isLogined: true}]);
        } else {
            setUsers(users => {
                const updatedUsers = [...users];
                const joinUserID = updatedUsers.findIndex(user => user.name == name);
                updatedUsers[joinUserID].isLogined = true;
                return updatedUsers;
            })
        }
    };

    const leaveUser = (name) => {
        const updatedUsers = [...usersRef.current];
        const leaveUserID = updatedUsers.findIndex(user => user.name == name);
        updatedUsers[leaveUserID].isLogined = false;
        set(updatedUsers);
        setUsers(updatedUsers);
    };

    return [getUser, joinUser, leaveUser];
}


export default useUserProfile;