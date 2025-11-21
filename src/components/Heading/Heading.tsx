import style from "./Heading.module.css";
import type { HeadingProps } from "./Heading.props";


function Heading({ width, hight, children }: HeadingProps) {

    return (
        <h2 
        className={style.heading}
        style={{
            width:width,
            height:hight
        }}
        >
            {children}
        </h2>
    );
};

export default Heading;