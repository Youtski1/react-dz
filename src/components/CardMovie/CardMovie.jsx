import style from "./CardMovie.module.css";
import RatingButton from "../RatingButton/RatingButton";
import { useState } from "react";
import { forwardRef } from "react";

function CardMovie({ title, cover, grade_movie }) {

    const [grade, setGrade] = useState(grade_movie);

    return (
        <div className={style["card_movie"]}>
            <div className={style["card_movie__cover"]}>
                <div className={style["rating-button-container"]}> 
                    <RatingButton grade={grade} setGrade={setGrade} />
                </div>
                <img className={style["card_movie__img"]} src={`/public/covers/${cover}.png`} alt="обложка"/>
            </div>
            <p className={style["card_movie__title"]}>{title}</p>
            <a className={style["card_movie__button"]}>В избранное</a>
        </div>
    )
}

export default CardMovie;