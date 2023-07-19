import React from 'react';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import search from '../../../images/search.svg';
import search_invisible from '../../../images/search_invisible.svg';

import './SearchForm.css'

function SearchForm() {
  return (
    <section className="search">
      <div className='search__container'>
        <img className="search__icon" src={search} alt="Картинка -поиск-"/>
        <form className="search__form">
          <input className="search__input" 
            id='input-search' 
            type="text" 
            name="search" 
            placeholder="Фильм" 
            required/>
          <span className="search-error input-search-error"></span> 
          <button className="search__submit-button" type="submit" name="button">
            <img  className="search__submit-button-icon" src={search_invisible} alt="Кнопка поиск"/>
          </button>
        </form>
      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;