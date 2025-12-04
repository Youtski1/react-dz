import { useState } from "react";
import styles from "./ButtonAddFavourite.module.css";
import type { ButtonAddFavouriteProps } from "./ButtonAddFavourite.props";
import movies from "../../movies";
import cn from "classnames";


function ButtonAddFavourite({ className, isFavorite, id }: ButtonAddFavouriteProps) {

    const [active, setActive] = useState(isFavorite);

    const setFavorite = () => {
        setActive(active => !active);
        movies[id-1].isFavourite = !active;
    };

    return (
        <div className={cn(styles["fovourite_button"], className)}>
            <img className={styles["favourite-icon"]} src={`/public/${active ? 'favourite.png' : 'like.svg'}`} alt="" />
            <button onClick={setFavorite} className={cn(styles["button"], {[styles["active"]]: active})}>
                {active ? 'В избранное' : 'В избранном'}
            </button>
        </div>
    );
}

export default ButtonAddFavourite;