import style from "./Button.module.css";
import { forwardRef } from "react";

const Button = forwardRef(function Button({ width, hight, text, onClick }, ref) {

    return (
    <button
    className={style.button}
    ref={ref}
    onClick={onClick}
    style={{
        width:width,
        hight:hight
    }}
    >{text}
    </button>
    );
});


export default Button;