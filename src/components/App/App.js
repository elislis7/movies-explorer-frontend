import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import './App.css';

import { apiMain } from '../../utils/Api/MainApi';
import { CurrentUserContextProvider } from '../../contexts/CurrentUserContext';
import { CurrentMoviesContextProvider } from '../../contexts/CurrentMovieContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Register from '../FormAuth/Register/Register';
import Login from '../FormAuth/Login/Login';

import Profile from '../Profile/Profile';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFoundPages from '../NotFoundPages/NotFoundPages';
import Preloader from '../Movies/Preloader/Preloader';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isTokenCheck, setIsTokenCheck] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('currentId');

    if (userId) {
      apiMain.getUser()
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch((err) =>{
          setText(err);
        })
        .finally(() => {
          setIsTokenCheck(true);
        })
    } else {
      setIsTokenCheck(true);
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className='App'>
      { isTokenCheck
        ? <CurrentUserContextProvider context={{ currentUser, setCurrentUser }}>
          <CurrentMoviesContextProvider context={{ savedMovies, setSavedMovies }}>
            <Routes>
              <Route path="/" element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }/>

              <Route path='/signup' element={
                <ProtectedRoute isLoggedIn={!isLoggedIn} >
                  <Register 
                    title='Добро пожаловать!'
                    buttonText='Зарегистрироваться'
                    text='Уже зарегистрированы? '
                    linkText='Войти'
                    link='/signin'
                    changeStatus={setIsLoggedIn}
                  />
                </ProtectedRoute>
              }/>

              <Route path='/signin' element={
                <ProtectedRoute isLoggedIn={!isLoggedIn} >
                  <Login 
                    title='Рады видеть!'
                    buttonText='Войти'
                    text='Ещё не зарегистрированы? '
                    linkText='Регистрация'
                    link='/signup'
                    changeStatus={setIsLoggedIn}
                  />
                </ProtectedRoute>
              }/>

              <Route path='/profile' element={
                  <>
                    <Header isLoggedIn={isLoggedIn}/>
                    <Profile changeStatus={setIsLoggedIn} />
                  </>
              }/>

              <Route path='/movies' element={
                  <>
                    <Header isLoggedIn={isLoggedIn}/>
                    <Movies />
                    <Footer />
                  </>
              }/>

              <Route path='/saved-movies' element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <>
                    <Header isLoggedIn={isLoggedIn}/>
                    <SavedMovies />
                    <Footer />
                  </>
                </ProtectedRoute>
              }/>

              <Route path='*' element={<Navigate to='/404' replace />}/>

              <Route path='/404' element={
                <>
                  <NotFoundPages />
                </>
              }/>
            </Routes>
              </CurrentMoviesContextProvider>
            </CurrentUserContextProvider>
        : <div className='page__preloader'>
          <Preloader/>
        </div>
      }
    </div>
  );
}

export default App;