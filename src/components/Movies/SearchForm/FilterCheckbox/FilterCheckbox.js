import React from 'react';

import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div class="filter">
      <label class="filter__container">
        <input class="filter__input" type="checkbox" />
        <span class="filter__slider filter__slider_round"></span>
      </label>
      <p class="filter__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;