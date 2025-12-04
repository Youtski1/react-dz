import type { HTMLAttributes, ReactNode } from "react";


export interface ButtonLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    children: ReactNode,
    path?: string

}