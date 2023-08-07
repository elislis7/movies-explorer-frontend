import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import './App.css';

import accepted from '../../images/accepted.svg';
import rejected from '../../images/rejected.svg';

import { CHANGE_SUCCESS, ERROR } from '../../utils/constants'
import { apiMain } from '../../utils/Api/MainApi';
import { CurrentUserContextProvider } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Register from '../Register/Register';
import Login from '../Login/Login';

import Profile from '../Profile/Profile';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFoundPages from '../NotFoundPages/NotFoundPages';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // окно ошибки
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [popupStatus, setPopupStatus] = useState({
    image: '',
    message: '',
  });

  function handlePopupInfoMessage() {
    setIsSuccessPopupOpen(true);
  }

  function onAuth(values) {
    setIsLoading(true);

    apiMain.login(values)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          setIsLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch(() => {
        setPopupStatus({
          image: rejected,
          message: ERROR,
        });
        handlePopupInfoMessage();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function onRegister(values) {
    setIsLoading(true);

    apiMain.register(values)
      .then((res) => {
        setPopupStatus({
          image: accepted,
          message: 'Вы успешно зарегистрировались!',
        });
        onAuth({ 
          email: values.email,
          password: values.password 
        })
      })
      .catch(() => {
        setPopupStatus({
          image: rejected,
          message: ERROR,
        });
      })
      .finally(handlePopupInfoMessage)
  }

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn])

  useEffect(() => {
    if (isLoggedIn) {
      const jwt = localStorage.getItem('jwt');

      apiMain.getUserInfo(jwt)
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => console.log(`Произошла ошибка: ${err}`))

      apiMain.getUserMovies(jwt)
        .then((movies) => {
          // Filter out any undefined elements from the saved movies array
          const filteredMovies = movies.filter((movie) => movie !== undefined);
          setSavedMovies(filteredMovies);
        })
        .catch((err) => console.log(`Произошла ошибка: ${err}`))
    }
  }, [isLoggedIn]);

  function handleUpdateUser(data) {
    const jwt = localStorage.getItem('jwt');

    apiMain.updateUser(data, jwt)
      .then((user) => {
        setPopupStatus({
          image: accepted,
          message: CHANGE_SUCCESS,
        });
        setCurrentUser(user);
      })
      .catch(() => {
        setPopupStatus({
          image: rejected,
          message: ERROR,
        });
      })
      .finally(handlePopupInfoMessage)
    }

    function handleSaveMovie(movie) {
      console.log("movie", movie)
      const jwt = localStorage.getItem('jwt');
      
      const cardMovie = { 
        ...movie,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id
      }

      delete cardMovie.id
      delete cardMovie.created_at
      delete cardMovie.updated_at

      apiMain.saveMovie(cardMovie, jwt)
        .then((newMovie) => {
          setSavedMovies([newMovie.cardMovie, ...savedMovies]);
        })
        .catch((err) => console.log(`Произошла ошибка: ${err}`))
    }

    function handleDeleteMovie(movie) {
      const jwt = localStorage.getItem('jwt');

      apiMain.deleteMovie({ id: movie._id }, jwt) 
        .then(() => {
          setSavedMovies((state) => 
            state.filter((item) => item._id !== movie._id))
        })
        .catch((err) => console.log(`Произошла ошибка: ${err}`))
    }

    function handleLogOut() {
      localStorage.removeItem('jwt');
      setCurrentUser('');
      localStorage.clear();
      setIsLoggedIn(false);
      navigate('/');
    }

    function closePopup() {
      setIsSuccessPopupOpen(false);
    }

  return (
    <CurrentUserContextProvider context={{ currentUser, setCurrentUser }}>
        <div className='App'>
          <Routes>
            <Route path='/' element={
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
                  onRegister={onRegister}
                  isLoading={isLoading}
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
                  onAuth={onAuth}
                  isLoading={isLoading}
                />
              </ProtectedRoute>
            }/>

            <Route path='/profile' element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <>
                  <Header isLoggedIn={isLoggedIn}/>
                  <Profile 
                    isLoading={isLoading}
                    onUpdateUser={handleUpdateUser} // обновление инфо пользователя
                    onLogOut={handleLogOut} // функция выхода из аккаунта при нажатии кнопки 'Выйти'
                    onClose={closePopup}
                  />
                </>
              </ProtectedRoute>
            }/>

            <Route path='/movies' element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <>
                  <Header isLoggedIn={isLoggedIn}/>
                  <Movies 
                    savedMovies={savedMovies} // сохраненые фильмы
                    onDeleteMovie={handleDeleteMovie} // удаление фильма
                    onSaveMovie={handleSaveMovie} // сохраняем фильм
                  />
                  <Footer />
                </>
              </ProtectedRoute>
            }/>

            <Route path='/saved-movies' element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <>
                  <Header isLoggedIn={isLoggedIn}/>
                  <SavedMovies
                    savedMovies={savedMovies} // сохраненые фильмы
                    onDeleteMovie={handleDeleteMovie} // удаление фильма
                  />
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

          <InfoTooltip
            isOpen={isSuccessPopupOpen} // открыть поп-ап
            onClose={closePopup} // закрыть поп-ап
            popupStatus={popupStatus} // отображает картинку и сообщение об успехе или ошибке
          />
        </div>
    </CurrentUserContextProvider>
  );
}

export default App;