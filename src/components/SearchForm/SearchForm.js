import React from 'react';
/* import { Link } from "react-router-dom"; */
import search from '../../images/не уменьшеный формат/search.svg';
import search_invisible from '../../images/не уменьшеный формат/search_invisible.svg';
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section class="search">
      <form class="search__form" id='search-form-movies' name='' novalidate>
        <img class="search__icon" src={search} alt=""/>
        <input class="search__input" 
        id='input-search' type="text" name="search" value=""
        placeholder="Фильм" minlength="2" maxlength="40" required/>
        <span class="search-error input-search-error"></span> 
        <button class="search__submit-button" id='submit-button' type="submit" name="button">
          <img  class="search__icon_submit-button" src={search_invisible} alt=""/>
        </button>
      </form>

      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;