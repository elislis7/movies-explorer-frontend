import React from 'react';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import search from '../../../images/search.svg';
import search_invisible from '../../../images/search_invisible.svg';

import './SearchForm.css'

function SearchForm() {
  return (
    <section class="search">
      <div className='search__container'>
        <img class="search__icon" src={search} alt=""/>
        <form class="search__form">
          <input class="search__input" 
            id='input-search' 
            type="text" 
            name="search" 
            placeholder="Фильм" 
            required/>
          <span class="search-error input-search-error"></span> 
          <button class="search__submit-button" type="submit" name="button">
            <img  class="search__icon_submit-button" src={search_invisible} alt=""/>
          </button>
        </form>
      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;