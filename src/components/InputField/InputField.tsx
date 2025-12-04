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
        <div className={style["input_field"]}>
            {iconSearch && <img className={style["input_icon"]} src="/public/icon_search.svg" alt="" />}
            <input
            {...props}
            ref={ref}
            className={cn(style['input'], {[style["input_field--movie-search"]]: iconSearch}, {[style["invalid"]]: !valid})}
            placeholder={placeholder}
            type="search"
            style={{
                height:height,
                width:width
            }}
            />
        </div>
    );

};


export default InputField;