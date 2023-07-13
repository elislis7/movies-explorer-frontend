import React from 'react';

import SearchForm from './SearchForm/SearchForm';
/* import Preloader from './Preloader/Preloader'; */
import MoviesCardList from './MoviesCardList/MoviesCardList';
/* import MoviesCard from '../MoviesCard/MoviesCard'; */

import './Movies.css';

function Movies() {
  return (
    <main className='main main-container'>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
        <div className="movies__button-container">
          <button className="movies__button">
            Еще
          </button>
        </div>
      {/* <MoviesCard /> */}
    </main>
  );
}

export default Movies;