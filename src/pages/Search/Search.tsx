import { UserContextProvider } from "../../contexts/user_context_provider";
import Header from "../../layouts/Header/Header";
import MovieSearch from "../../sections/MovieSearch/MovieSearch";
import Body from "../../layouts/Body/Body";
import BoardCardMovie from "../../components/BoardCardMovie/BoardCardMovie";
import movies from "../../movies";
import '../../App.css';



function Search() {

    return (
        <UserContextProvider>
                <Header>
                    <MovieSearch/>
                </Header>
                <Body>
                    <BoardCardMovie movies={movies}/>
                </Body>
        </UserContextProvider>
    );
}


export default Search;