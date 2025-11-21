import type { InputHTMLAttributes, Ref } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    valid?: boolean,
    iconSearch?: boolean,
    width: string,
    height: string
    ref?: Ref<HTMLInputElement> | undefined,
    placeholder: string
}
