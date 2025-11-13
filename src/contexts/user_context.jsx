import { createContext, useState, useEffect, useRef, useContext } from "react";
import useUserProfile from "../hooks/useUserProfile.hook";
import useLocalStorage from "../hooks/uselocalStorage.hook";


const UserContext = createContext();


export function UserContextProvider({ children }) {
    const [,,leaveUser] = useUserProfile();
    const [user, setUser] = useState();
    const userRef = useRef(user);
    
    useEffect(() => {
        userRef.current = user;
    }, [user])


    useEffect(() => {
        const handleLeave = () => {
            if (userRef.current)
            leaveUser(userRef.current.name)
        }

        window.addEventListener('beforeunload', handleLeave)
        return () => window.removeEventListener('beforeunload', handleLeave)
    }, [leaveUser])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext);

export default useUserContext;