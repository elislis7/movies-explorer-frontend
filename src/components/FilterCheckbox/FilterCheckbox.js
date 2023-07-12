import React from 'react';

import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div class="search__filter">
      <label class="search__filter_button">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <p class="search__filter_text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;