import { useParams } from "react-router-dom";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import styles from "./Movie.module.css";
import movies from "../../movies";
import BoardReview from "../../components/BoardReview/BoardReview";
import ButtonAddFavourite from "../../components/ButtonAddFavourite/ButtonAddFavourite";


function Movie() {

    const { id } = useParams();
    const movie = movies[Number(id)-1];

    return (
        <div className={styles["wrapper"]}> 
            <header className={styles["header"]}>
                <ButtonLink className={styles["header__button-link"]} path="/">Поиск фильмов</ButtonLink>
                <h1 className={styles['header__title']}>{movie.title}</h1>
            </header>
            <main className={styles["main"]}>
                <section className={styles["movie"]}>
                    <img className={styles["movie__image"]} src={`/public/covers/${movie.id}.png`} alt="картинка" />
                    <div className={styles["movie__info"]}>
                        <p className={styles["movie__description"]}>{movie.description}</p>
                        <div className={styles["movie__action"]}>
                            <p className={styles["movie__grade"]}>{movie.grade}</p>
                            <ButtonAddFavourite isFavorite={movie.isFavourite} id={movie.id}/>
                        </div>
                        <div className={styles["movie__category"]}>
                            <span className={styles["category"]}>Тип</span>
                            <p className={styles["category__info"]}>{movie.type}</p>
                        </div>
                        <div className={styles["movie__category"]}>
                            <span className={styles["category"]}>Дата выхода</span>
                            <p className={styles["category__info"]}>{movie.date}</p>
                        </div>
                        <div className={styles["movie__category"]}>
                            <span className={styles["category"]}>Длительность</span>
                            <p className={styles["category__info"]}>{movie.duration}</p>
                        </div>
                        <div className={styles["movie__category"]}>
                            <span className={styles["category"]}>Жанр</span>
                            <p className={styles["category__info"]}>{movie.genry}</p>
                        </div>
                    </div>
                </section> 
                <section className={styles["reviews"]}>
                    <p className={styles["reviews__title"]}>Отзывы</p>
                    <BoardReview/>
                </section>
            </main>
        </div>
    );
}


export default Movie;
