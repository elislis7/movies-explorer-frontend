import React, { useEffect, useState } from 'react';

import './Movies.css';

import { filterMovieDuration, filterMovies } from '../../utils/utils';
import { apiMovie } from '../../utils/Api/MoviesApi';

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies(props) {
  
  const { onSaveMovie, onDeleteMovie, savedMovies } = props;

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [error, setError] = useState(false);

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);

    if (!isShortMovies) {
      if (filterMovieDuration(allMovies).length === 0) {
        setFilteredMovies(filterMovieDuration(allMovies));
      } else {
        setFilteredMovies(filterMovieDuration(allMovies));
      }
    } else {
      setFilteredMovies(allMovies);
    }

    localStorage.setItem('isShortMovies', !isShortMovies);
  }

  function handleFilteredMovies(movies, query, short) {
    const moviesCardList = filterMovies(movies, query, short);

    setAllMovies(moviesCardList);
    setFilteredMovies(short
      ? filterMovieDuration(moviesCardList)
      : moviesCardList);
    localStorage.setItem('allMovies', JSON.stringify(movies));
    localStorage.setItem('movies', JSON.stringify(moviesCardList));
  }

  // Обработчик события для отправки формы поиска фильмов
  function handleSearchSubmit(query) {
    localStorage.setItem('isShortMovies', isShortMovies);
    localStorage.setItem('movieSearch', query);

    if (localStorage.getItem('allMovies')) {
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      handleFilteredMovies(movies, query, isShortMovies);
    } else {
      setIsLoading(true);
      
      apiMovie.getMovies()
        .then((movieData) => {
          handleFilteredMovies(movieData, query, isShortMovies);
          setError(false);
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('movieSearch')) {
      setIsNothingFound(filteredMovies.length === 0);
      if (filteredMovies.length === 0) {
        setIsNothingFound(true);
      } else {
        setIsNothingFound(false);
      }
    } else {
      setIsNothingFound(false);
    }
  }, [filteredMovies])

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setAllMovies(movies);

      if (localStorage.getItem('isShortMovies') === 'true') {
        setFilteredMovies(filterMovieDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('isShortMovies') === 'true') {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  return (
    <main className='main main-container'>
      <SearchForm 
        onSearchMovies={handleSearchSubmit}
        isShortMovies={isShortMovies}
        onShortMoviesFilter={handleShortMovies}
      />

      <MoviesCardList
        cards={filteredMovies}
        isLoading={isLoading}
        isEmptyList={isNothingFound}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
        isSavedFilms={false}
      />
    </main>
  );
};

export default Movies;