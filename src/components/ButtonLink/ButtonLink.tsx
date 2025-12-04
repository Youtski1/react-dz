import { NavLink } from "react-router-dom";
import style from "./ButtonLink.module.css";
import type { ButtonLinkProps } from "./Button.props";
import cn from "classnames";

function ButtonLink({ path, children, ...props }: ButtonLinkProps) {

    if (!path) 
        return <a {...props} className={style["button_link"]}>{children}</a>;
    
    return (
        <NavLink to={path} {...props} className={({ isActive }) => (cn(style["button_link"], {[style.active]: isActive}, props.className ?? ''))}>
            {children}
        </NavLink>
    );
};

export default ButtonLink;