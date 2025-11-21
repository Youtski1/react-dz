import { useEffect, useRef, useState } from "react";
import type { FormEvent} from 'react';

import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import Heading from "../../components/Heading/Heading";
import { useUserProfile}  from "../../hooks/useUserProfile.hook";

import style from "./RegisterForm.module.css";
import { useUserContext } from "../../contexts/user_context_provider";



function RegisterForm() {

    const { getUser, joinUser } = useUserProfile();
    const { setUser } = useUserContext();
    const [valid, setValid] = useState(true);
    const nameRef = useRef<HTMLInputElement | null>(null);
   
    useEffect(() => {
        const timerId = setTimeout(() => setValid(true), 5000);
        return () => clearTimeout(timerId);
    }, [valid]);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = nameRef.current?.value;

        if (!name) {
            if (nameRef.current)
                nameRef.current.focus();
            setValid(false);
        }
        else {
            joinUser(name);
            setUser(getUser(name));
        }
    };

    return (
        <section className={style["register-user"]}>
            <Heading
            height="80px"
            width="158px"
            >Вход</Heading>

            <form className={style["register-form"]} onSubmit={onSubmit}>
                <InputField
                placeholder="Ваше имя"
                width="384px"
                height="66px"
                name="name"
                valid={valid}
                ref={nameRef}
                />
                <Button
                height="56px"
                width="201px"
                >Войти в профиль</Button>
            </form>
            
        </section>
    );

}


export default RegisterForm;