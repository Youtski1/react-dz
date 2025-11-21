
import type { ReactNode } from "react";
import { createContext, useState, useEffect, useRef, useContext } from "react";
import useUserProfile from "../hooks/useUserProfile.hook";
import type { User } from "../types/user";


interface UserContextData {
    user: User | null,
    setUser: (arg: User | null) => void
}

const UserContext = createContext<UserContextData | undefined>(undefined);


export function UserContextProvider({ children }: {children: ReactNode}) {
    
    const { leaveUser } = useUserProfile();
    const [user, setUser] = useState<User | null>(null);
    const userRef = useRef<User | null>(user);
    
    useEffect(() => {
        userRef.current = user;
    }, [user]);


    useEffect(() => {
        const handleLeave = () => {
            if (userRef.current)
            leaveUser(userRef.current.name);
        };

        window.addEventListener('beforeunload', handleLeave);
        return () => window.removeEventListener('beforeunload', handleLeave);
    }, [leaveUser]);


    let data: UserContextData = {
        user: null,
        setUser: setUser
    };
    
    if (user) {
        data = {
            user: user,
            setUser: setUser
        };
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}


export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within UserContextProvider");
    return context;
};


