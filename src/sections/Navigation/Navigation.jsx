import style from "./Navigation.module.css";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { use } from "react";


function Navigation({ user, leaveUser  }) {

    return (
        <nav className={style.navigation}>
            <ul className={style["navigation__list"]}>
                <li className={style["navigation__element"]}>
                    <ButtonLink>
                        <img src="/public/bookmark.svg" alt="" />
                    </ButtonLink>
                </li>
                <li className={style["navigation__element"]}>
                    <ButtonLink>
                        Поиск фильмов
                    </ButtonLink>
                </li>
                <li className={style["navigation__element"]}>
                    <ButtonLink>
                        Мои фильмы
                    </ButtonLink>
                </li>
                {user && 
                    <li className={style["navigation__element--user"]}>
                        <ButtonLink>
                            {user.name}
                        </ButtonLink>
                    </li>
                }
                <li className={style["navigation__element"]}>
                    {user ? <ButtonLink onClick={leaveUser}>Выйти</ButtonLink> : <ButtonLink>Войти</ButtonLink>}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;