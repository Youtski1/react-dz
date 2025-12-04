import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Movie from './pages/Movie/Movie';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './contexts/user_context_provider';
import Search from './pages/Search/Search';
import Navigation from './layouts/Navigation/Navigation';
import Login from './pages/Login/Login';
import Favourites from './pages/ Favourites/ Favourites';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation/>,
    children: [
      {
        path: "/",
        element: <Search/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/movie/:id",
        element: <Movie/>
      },
      {
        path: "/favorites",
        element: <Favourites/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router}/>
    </UserContextProvider>
  </StrictMode>,
);
