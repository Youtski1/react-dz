import style from "./ButtonLink.module.css";

function ButtonLink({ children, ...props }) {

    return (
        <a {...props} className={style["button_link"]}>
            {children}
        </a>
    );
}

export default ButtonLink;