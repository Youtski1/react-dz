import style from "./Heading.module.css"


function Heading({ text, width, height}) {

    return (
        <h2 
        className={style.heading}
        style={{
            width:width,
            height:height
        }}
        >
            {text}
        </h2>
    );
};

export default Heading;