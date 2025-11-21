import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    hight: string,
    width: string
    ref?: Ref<HTMLButtonElement> | undefined
};