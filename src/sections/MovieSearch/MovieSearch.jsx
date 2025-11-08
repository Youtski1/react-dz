import style from "./MovieSearch.module.css";
import Heading from "../../components/Heading/Heading";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField"
import { useState } from "react";

function MovieSearch() {

    const [title,setTitle] = useState("");

    const searchMovie = () =>{
        console.log("Выполняю поиск: " + title);
    };

    const onChage = (event) => {
        setTitle(event.target.value);
    };

    return (
        <section className={style["movie_search"]}>
            <div className={style['search_page__header']}>
                <Heading
                text={"Поиск"}
                />
                
                <Paragraph
                width={"588px"}
                height={"48px"}
                text={"Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."}
                />
            </div>
            <div className={style['search_page__body']}>
                <InputField
                width={"384px"}
                height={"64px"}
                placeholder={"Введите название"}
                iconSearch={true}
                onChage={onChage}
                />

                <Button
                width={"119px"}
                hight={"56px"}
                text={"Искать"}
                onClick={searchMovie}
                />
            </div>
        </section>
    )
}

export default MovieSearch;