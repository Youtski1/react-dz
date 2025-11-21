import style from "./CardMovie.module.css";
import RatingButton from "../RatingButton/RatingButton";
import { useState } from "react";
import type { CardProps } from "./CardMovie.props";


function CardMovie({ movie }: CardProps) {

    const [grade, setGrade] = useState(movie.grade);

    return (
        <div className={style["card_movie"]}>
            <div className={style["card_movie__cover"]}>
                <div className={style["rating-button-container"]}> 
                    <RatingButton grade={grade} setGrade={setGrade} />
                </div>
                <img className={style["card_movie__img"]} src={`/public/covers/${movie.id}.png`} alt="обложка"/>
            </div>
            <p className={style["card_movie__title"]}>{movie.title}</p>
            <a className={style["card_movie__button"]}>В избранное</a>
        </div>
    );
}

export default CardMovie;