import style from "./Paragraph.module.css";


function Paragraph( {height, width, text } ) {

    return (
        <p
        className={style.paragraph}
        style={{
            width:width,
            height:height
        }}
        >
        {text}
        </p>
    );
};

export default Paragraph;