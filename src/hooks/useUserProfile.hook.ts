import useLocalStorage from "./uselocalStorage.hook";
import { useEffect, useState, useRef } from "react";

import type { User } from "../types/user";

type UseUserProfile = {
    getUser: (arg: string) => User | null, 
    joinUser: (arg: string) => void, 
    leaveUser: (arg: string) => void
}

export function useUserProfile(): UseUserProfile {
    
    const {get, set} = useLocalStorage<User[]>('users', []);
    const [users, setUsers] = useState<User[]>(() => {
        const storedData = get(); 
        return Array.isArray(storedData) ? storedData : [];
    });
    const usersRef = useRef(users);


    useEffect(() => {
        if (users.length){ 
            usersRef.current = users;
            set(users);
        }
    }, [users, set]);


    const getUser = (name: string): User | null => {
        if (!users)
            return null;
        
        const userID = users.findIndex(user => user.name == name);

        
        if (userID == -1)
            return null;

        return users[userID];
    };


    const joinUser = (name: string) => {
        const user = getUser(name);

        if (!user) {
            setUsers(users => [...users, {name: name, isLogined: true}]);
        } else {
            setUsers(users => {
                const updatedUsers = [...users];
                const joinUserID = updatedUsers.findIndex(user => user.name == name);
                updatedUsers[joinUserID].isLogined = true;
                return updatedUsers;
            });
        }
    };

    const leaveUser = (name: string) => {
        const updatedUsers = [...usersRef.current];
        const leaveUserID = updatedUsers.findIndex(user => user.name == name);
        updatedUsers[leaveUserID].isLogined = false;
        set(updatedUsers);
        setUsers(updatedUsers);
    };

    return { getUser, joinUser, leaveUser };
}


export default useUserProfile;