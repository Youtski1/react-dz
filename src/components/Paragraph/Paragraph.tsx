import style from "./Paragraph.module.css";
import type { ParagraphProps } from "./Paragraph.props";

function Paragraph( {height, width, children}: ParagraphProps ) {

    return (
        <p
        className={style.paragraph}
        style={{
            width:width,
            height:height
        }}
        >
        {children}
        </p>
    );
};

export default Paragraph;