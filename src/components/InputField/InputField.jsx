import { useEffect, useState } from "react";
import style from "./InputField.module.css"
import cn from "classnames";
import { forwardRef } from "react";

const InputField = forwardRef(function InputField({ valid=true, placeholder, width, height, iconSearch=false, onChage, ...props }, ref) {

    return (
        <>
            {iconSearch && <img className={style["input_icon"]} src="/public/icon_search.svg" alt="" />}
            <input
            {...props}
            className={cn(style['input_field'], {[style["input_field--movie-search"]]: iconSearch}, {[style["invalid"]]: !valid})}
            placeholder={placeholder}
            type="search"
            onChange={onChage}
            style={{
                width:width,
                height:height
            }}
            />
        </>
    );
});

export default InputField;