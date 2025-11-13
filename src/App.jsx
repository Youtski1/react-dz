import './App.css';
import Header from './layouts/Header/Header';
import Body from './layouts/Body/Body';
import MovieSearch from './sections/MovieSearch/MovieSearch';
import Navigation from './sections/Navigation/Navigation';
import BoardCardMovie from './components/BoardCardMovie/BoardCardMovie';
import RegisterForm from './sections/RegisterForm/RegisterForm';
import movies from './movies';

import { use, useEffect, useRef, useState} from 'react';
import useUserProfile from './hooks/useUserProfile.hook';
import { UserContextProvider } from './contexts/user_context';


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
  )
}

export default App;
