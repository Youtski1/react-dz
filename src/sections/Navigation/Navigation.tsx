import style from "./Navigation.module.css";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { useUserContext } from "../../contexts/user_context_provider";
import { useUserProfile } from "../../hooks/useUserProfile.hook";


function Navigation() {

    const { leaveUser } = useUserProfile();
    const { user, setUser } = useUserContext();

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
                    {user ? <ButtonLink onClick={() => { console.log(user); leaveUser(user.name); setUser(null);}}>Выйти</ButtonLink> : <ButtonLink>Войти</ButtonLink>}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;