import { Route, Routes } from 'react-router';

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import NotFoundPages from '../NotFoundPages/NotFoundPages';

import Register from '../FormAuth/Register/Register';
import Login from '../FormAuth/Login/Login';

import Profile from '../Profile/Profile';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }/>

        <Route path='/sign-up' element={
          <>
            <Register />
          </>
        }/>

        <Route path='/sign-in' element={
          <>
            <Login />
          </>
        }/>

        <Route path='/profile' element={
          <>
            <Header isLoggedIn={true} isMenuOpened={true} />
            <Profile />
          </>
        }/>

        <Route path='/movies' element={
          <>
            <Header isLoggedIn={true} isMenuOpened={true} />
            <Movies />
            <Footer />
          </>
        }/>

        <Route path='/saved-movies' element={
          <>
            <Header isLoggedIn={true} isMenuOpened={true} />
            <SavedMovies />
            <Footer />
          </>
        }/>

        <Route path='*' element={
          <>
            <NotFoundPages />
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
