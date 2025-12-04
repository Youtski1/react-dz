import style from "./Navigation.module.css";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { useUserContext } from "../../contexts/user_context_provider";
import { useUserProfile } from "../../hooks/useUserProfile.hook";
import { Outlet } from "react-router-dom";


function Navigation() {

    const { leaveUser } = useUserProfile();
    const { user, setUser } = useUserContext();

    return (
        <div className={style.page}>
            <nav className={style.navigation}>
                <ul className={style["navigation__list"]}>
                    <li className={style["navigation__element"]}>
                        <ButtonLink path="/favorites">
                            <img src="/public/bookmark.svg" alt="" />
                        </ButtonLink>
                    </li>
                    <li className={style["navigation__element"]}>
                        <ButtonLink path="/">
                            Поиск фильмов
                        </ButtonLink>
                    </li>
                    <li className={style["navigation__element"]}>
                        <ButtonLink path="/favorites">
                            Мои фильмы
                        </ButtonLink>
                    </li>
                    {user && 
                        <li className={style["navigation__element--user"]}>
                            <ButtonLink path="/profile">
                                {user.name}
                            </ButtonLink>
                        </li>
                    }
                    <li className={style["navigation__element"]}>
                        {user ? <ButtonLink onClick={() => {leaveUser(user.name); setUser(null); console.log(11)}}>Выйти</ButtonLink> : <ButtonLink path="/login">Войти</ButtonLink>}
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
}

export default Navigation;