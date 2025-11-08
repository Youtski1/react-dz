import { useEffect } from "react";



function useLocalStorage(key, initValue=null) {

    useEffect(() => {
        const value = get(key);
        if (initValue && !value) {
            set(initValue)
        }
    }, []);


    const get = () => {
        try {
            const value = localStorage.getItem(key);
            if (value === null) 
                return;

            return JSON.parse(value);
        } catch(error)
         {
            console.error(error);
        }
    };

    const set = (value) => {
        try {
            const stringfyValue = JSON.stringify(value)
            localStorage.setItem(key, stringfyValue)
        } catch(error) {
            console.error(error)
        }
    };


    return [get, set]
}

export default useLocalStorage;