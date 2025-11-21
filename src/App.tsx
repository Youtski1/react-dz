import './App.css';
import Header from './layouts/Header/Header';
import Body from './layouts/Body/Body';
import MovieSearch from './sections/MovieSearch/MovieSearch';
import Navigation from './sections/Navigation/Navigation';
import BoardCardMovie from './components/BoardCardMovie/BoardCardMovie';
import RegisterForm from './sections/RegisterForm/RegisterForm';
import movies from './movies';

import { UserContextProvider } from './contexts/user_context_provider';


function App() {
  
  return (
    <UserContextProvider>
      <div className='search_page'>
        <Header>
          <Navigation/>
        </Header>
        <Body>
          <MovieSearch/>
          <BoardCardMovie movies={movies}/>
          <RegisterForm/>
        </Body>
      </div>
    </UserContextProvider>
  );
}

export default App;
