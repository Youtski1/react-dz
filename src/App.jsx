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


function App() {

  const [,,leaveUser] = useUserProfile();
  const [user, setUser] = useState();
  const userRef = useRef(user);

  useEffect(() => {
    userRef.current = user;
  }, [user])


  useEffect(() => {

    const handleLeave = () => {
    if (userRef.current)
      leaveUser(userRef.current.name)
    }

    window.addEventListener('beforeunload', handleLeave)
    return () => window.removeEventListener('beforeunload', handleLeave)
  }, [leaveUser])


  return (
    <div className='search_page'>
      <Header>
        <Navigation leaveUser = {() => {leaveUser(user.name); setUser(null)}} user={user}/>
      </Header>
      <Body>
        <MovieSearch/>
        <BoardCardMovie movies={movies}/>
        <RegisterForm entranceUser={setUser}/>
      </Body>
    </div>
    
  )
}

export default App;
