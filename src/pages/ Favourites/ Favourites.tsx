import CardMovie from "../../components/CardMovie/CardMovie";
import Heading from "../../components/Heading/Heading";
import movies from "../../movies";
import styles from "./ Favourites.module.css";



function Favourites() {


    return (
        <>
            <header className={styles["header"]}>
                <Heading>Избранное</Heading>
            </header>
            <main className={styles["main"]}>
                <section className={styles["favourite"]}>
                    {movies.map((movie) => {
                        if (movie.isFavourite) {
                            return <CardMovie movie={movie}/>;
                        }
                    })}
                </section>
            </main>
        </>
    );
}

export default Favourites;