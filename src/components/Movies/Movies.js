import React, { useEffect, useState } from 'react';

import './Movies.css';

import { getNumberOfCards, movieFilter } from '../../utils/utils'
import { apiMain } from '../../utils/Api/MainApi';
import { apiMovie } from '../../utils/Api/MoviesApi'
import { useDebounce } from '../../hook/debounce'
import { useMoviesContext } from '../../contexts/CurrentMovieContext';

import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {

  const { setSavedMovies } = useMoviesContext();

  const [searchParams, setSearchParams] = useState({querry: '', includeShorts: false}); // Состояние переключателя короткометражек
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [movies, setMovies] = useState([]); // [allMovies, setAllMovies] Состояние списка фильмов
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // [isLoading, setIsLoading] Состояние загрузки данных
  const [cardsAmount, setCardsAmount] = useState(getNumberOfCards());
  const [isMoveButtonVisible, setIsMoveButtonVisible] = useState(true); // отображение кнопки "еще"
  /* const [error, setError] = useState(''); // Состояние ошибки */
  const [isEmptyField, setIsEmptyField] = useState(false);
  const debouncedResize = useDebounce(handleResize);

  function handleResize() {
    setCardsAmount(getNumberOfCards());
  }

  // Обработчик события для загрузки дополнительных фильмов при нажатии на кнопку "Ещё"
  function handleMoreMovies() {
    const moviesToShow = searchedMovies.slice(displayedMovies.length, displayedMovies.length + cardsAmount.extraCards); 
    setDisplayedMovies([...displayedMovies, ...moviesToShow]);
  };

  // Обработчик события для отправки формы поиска фильмов
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    const {querry, shorts} = e.target.elements;
    if (!querry.value) {
      setIsEmptyField(true);
      return;
    }
    setIsEmptyField(false);

    const currentMovieSearch = {querry: querry.value, includeShorts: shorts.checked};
    localStorage.setItem('search', JSON.stringify(currentMovieSearch));
    setSearchParams(currentMovieSearch);
  };

  // Обработчик события для переключения флага "includeShorts" в параметрах поиска фильмов
  function handleShortsClick() {
    const newSearchParams = {...searchParams, includeShorts: !searchParams.includeShorts};
    localStorage.setItem('search', JSON.stringify(newSearchParams));
    setSearchParams(newSearchParams);
  }

  useEffect(() => {
    const search = JSON.parse(localStorage.getItem('search'));
    if (search) setSearchParams(search);

    const storageMovies = JSON.parse(localStorage.getItem('movies'));
    if (storageMovies) {
      setMovies(storageMovies);
      return;
    }
    
  setIsLoading(true);

  apiMovie.getMovies()
    .then(movies => {
      setMovies(movies);
      localStorage.setItem('movies', JSON.stringify(movies));
    })
    .catch(err => {
      /* setError(err); */
    })
    .finally(() => {
      setIsLoading(false);
    })
  }, [])

  useEffect(() => {
    setIsLoading(true);

    apiMain.getSavedMovies()
      .then(res => {
        setSavedMovies(res);
      })
      .catch(err => {
        /* setIsPopupOpen(true);
        setText(err); */
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [setSavedMovies])

  useEffect(() => {
    if (!searchParams.querry) return;
    const currentSearchedMovies = movies.filter(
      movie => movieFilter(movie, searchParams));
    setSearchedMovies(currentSearchedMovies);
  }, [searchParams, movies])

  useEffect(() => {
    setDisplayedMovies(
      searchedMovies.slice(0, cardsAmount.totalCards));
  }, [cardsAmount, searchedMovies])

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, [debouncedResize]);


  useEffect(() => {
      setIsMoveButtonVisible(
        displayedMovies.length < searchedMovies.length);
  }, [displayedMovies, searchedMovies])

  return (
    <main className='main main-container'>
      { isLoading ? null : (
        <SearchForm 
          searchParams={searchParams}
          handleSubmit={handleSearchSubmit}
          setSearchParams={setSearchParams}
          isEmptyField={isEmptyField}
          handleShortsClick={handleShortsClick}
        />
      )}

      { isLoading 
        ? <Preloader />
        : <MoviesCardList 
          moviesData={displayedMovies} 
        />
      }

      {
        isMoveButtonVisible
          ? <div className="movies__button-container" onClick={handleMoreMovies}>
              <button className="movies__button">
                Еще
              </button>
            </div>
          : null
      }
    </main>
  );
};

export default Movies;