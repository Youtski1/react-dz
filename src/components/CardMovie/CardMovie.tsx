import style from "./CardMovie.module.css";
import RatingButton from "../RatingButton/RatingButton";
import { useState } from "react";
import type { CardProps } from "./CardMovie.props";
import { Link } from "react-router-dom";
import ButtonAddFavourite from "../ButtonAddFavourite/ButtonAddFavourite";


function CardMovie({ movie }: CardProps) {

    const [grade, setGrade] = useState(movie.grade);

    return (
            <div className={style["card"]}>
                <div className={style["card__cover"]}>
                    <div className={style["rating-button-container"]}> 
                        <RatingButton grade={grade} setGrade={setGrade} />
                    </div>
                    <Link className={style["link"]} to={`movie/${movie.id}`}>
                        <img className={style["card__img"]} src={`/public/covers/${movie.id}.png`} alt="обложка"/>
                     </Link>
                </div>
                <p className={style["card__title"]}>{movie.title}</p>
                <ButtonAddFavourite className={style["card_favourite-btn"]} isFavorite={movie.isFavourite} id={movie.id}/>
            </div>
    );
}

export default CardMovie;