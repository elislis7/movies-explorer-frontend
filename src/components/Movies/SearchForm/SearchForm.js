import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import search from '../../../images/search.svg';
import search_invisible from '../../../images/search_invisible.svg';

import './SearchForm.css'

function SearchForm(props) {

  const {
    onSearchMovies,
    isShortMovies,
    onShortMoviesFilter
  } = props;

  const location = useLocation();

  const [querySearch, setQuerySearch] = useState('');
  const [isQuerySearchError, setIsQuerySearchError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('movieSearch') && location.pathname === '/movies') {
      const saveQuery =  localStorage.getItem('movieSearch');
      setQuerySearch(saveQuery);
    }
  }, [location]);

  function handleSubmit(e) {
    e.preventDefault();

    if (querySearch.trim().length === 0) {
      setIsQuerySearchError(true);
    } else {
      setIsQuerySearchError(false);
      onSearchMovies(querySearch);
    }
  }

  function changeQueryInput(e) {
    setQuerySearch(e.target.value);
  }

  return (
    <section className='search'>
      <div className='search__container'>
        <img className='search__icon' src={search} alt='Картинка -поиск-'/>
        <form className='search__form' onSubmit={handleSubmit}>
          <input 
            className='search__input' 
            id='input-search' 
            type='text' 
            name='query' 
            placeholder='Фильм' 
            value={querySearch || ''}
            onChange={changeQueryInput}
            required
          />
          { isQuerySearchError && 
            <span className='search-error input-search-error'></span> 
          }
          <button className='search__submit-button' type='submit' name='button'>
            <img  className='search__submit-button-icon' src={search_invisible} alt='Кнопка поиск'/>
          </button>
        </form>
      </div>
      <FilterCheckbox 
        isShortMovies={isShortMovies}
        onShortMoviesFilter={onShortMoviesFilter}
      />
    </section>
  );
}

export default SearchForm;