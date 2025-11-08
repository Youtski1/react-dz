import style from "./RatingButton.module.css";
import { useState } from "react";


function RatingButton({ grade, setGrade }) {

    const [activated,setActivated] = useState(false);

    const increaseGrade = () => {
        if (!activated) {
            setGrade(grade => grade + 1);
            setActivated(true)
        } else {
            setGrade(grade => grade - 1);
            setActivated(false)
        }
    };

    return (
        <div className={style["rating_button"]} onClick={increaseGrade}>
            {grade}
        </div>
    )
}

export default RatingButton;