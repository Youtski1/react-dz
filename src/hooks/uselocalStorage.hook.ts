import { useEffect } from "react";

type JsonPrimitive = string | number | boolean | null;
type JsonObject = { [Key in string]?: JsonValue };
type JsonArray = JsonValue[];
type JsonValue = JsonPrimitive | JsonObject | JsonArray;


type UseLocalStorage<T> = {
    get: () => T,
    set: (value: unknown) => void
}


function useLocalStorage<T>(key: string, initValue: JsonValue = null): UseLocalStorage<T> {
 
    const get = () => {
        try {
            const value = localStorage.getItem(key);
            if (value === null) 
                return null;

            return JSON.parse(value);
        } catch(error)
         {
            console.error(error);
        }
    };

    const set = (value: unknown) => {
        try {
            const stringfyValue = JSON.stringify(value);
            localStorage.setItem(key, stringfyValue);
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const value = get();
        if (initValue && !value) {
            set(initValue);
        };
    }, []);


    return { get, set };
} 

export default useLocalStorage;