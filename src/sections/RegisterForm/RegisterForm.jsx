import { use, useEffect, useRef, useState } from "react";

import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import Heading from "../../components/Heading/Heading";
import useUserProfile from "../../hooks/useUserProfile.hook";

import style from "./RegisterForm.module.css";




function RegisterForm({ entranceUser }) {

    const [getUser, joinUser, ] = useUserProfile();
    const [valid, setValid] = useState(true);
    const nameRef = useRef();
   

    useEffect(() => {
        const timerId = setTimeout(() => setValid(true), 5000)
        return () => clearTimeout(timerId)
    }, [valid])

    const onSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;

        if (!name) {
            nameRef.current.focus();
            setValid(false)
        }
        else {
            joinUser(name);
            entranceUser(getUser(name));
        }
    } 

    return (
        <section className={style["register-user"]}>
            <Heading
            text="Вход"
            height="80px"
            width="158px"
            />

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
                text="Войти в профиль"
                hight="56px"
                width="201px"
                />
            </form>
            
        </section>
    )

}


export default RegisterForm;