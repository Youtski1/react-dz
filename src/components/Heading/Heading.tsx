import style from "./Heading.module.css";
import type { HeadingProps } from "./Heading.props";


function Heading({ width, height, children }: HeadingProps) {

    return (
        <h2 
        className={style.heading}
        style={{
            width:width,
            height:height
        }}
        >
            {children}
        </h2>
    );
};

export default Heading;