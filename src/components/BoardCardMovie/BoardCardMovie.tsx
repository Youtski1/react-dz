import style from "./BoardCardMovie.module.css";
import CardMovie from "../CardMovie/CardMovie";
import type { BoardCardMovieProps } from "./BoardCardMovie.props";


function BoardCardMovie({ movies }: BoardCardMovieProps) {

    return (
        <ol className={style["list_card_movies"]}>
            {movies.map(movie => (
                <li className={style["list__element"]} key={movie.id}>
                    <CardMovie 
                        movie={movie}
                    />
                </li>
            ))}
        </ol>
    );

}

export default BoardCardMovie;