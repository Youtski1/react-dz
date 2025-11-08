import style from "./BoardCardMovie.module.css";
import CardMovie from "../CardMovie/CardMovie"


function BoardCardMovie({ movies }) {

    return (
        <ol className={style["list_card_movies"]}>
            {movies.map(movie => (
                <li className={style["list__element"]} key={movie.id}>
                    <CardMovie 
                    title={movie.title}
                    cover={movie.id}
                    grade_movie={movie.grade_movie}
                    />
                </li>
            ))}
        </ol>
    )

}

export default BoardCardMovie;