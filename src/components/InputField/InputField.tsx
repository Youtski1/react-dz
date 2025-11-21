import type { InputFieldProps } from "./InputField.props";
import style from "./InputField.module.css";
import cn from "classnames";


function InputField({ 
    valid=true, 
    iconSearch=false,
    ref, 
    height,
    width,
    placeholder,  
    ...props 
}: InputFieldProps) {

    return (
        <>
            {iconSearch && <img className={style["input_icon"]} src="/public/icon_search.svg" alt="" />}
            <input
            {...props}
            ref={ref}
            className={cn(style['input_field'], {[style["input_field--movie-search"]]: iconSearch}, {[style["invalid"]]: !valid})}
            placeholder={placeholder}
            type="search"
            style={{
                height:height,
                width:width
            }}
            />
        </>
    );

};


export default InputField;