import React from 'react';

import movie from '../../images/pic__COLOR_pic.png';

import './MoviesCard.css'

function MoviesCard() {
  return (
    <section class="movies">

      <div  class="movie">

        <div class="movie__description">
          <h2 class="movie__title">В погоне за Бенкси</h2>
          <p class="movie__duration">27 минут</p>
        </div>

        <img class="movie__image" src={movie} alt="#"/>

        <div class="movie__container_buttons">
          <button 
            class="movie__buttons element__save" 
            type="button" 
            name="button" 
            aria-label="Кнопка сохранения фильма">
              Сохранить
          </button>
{/* 
          <button 
            class="movie__buttons element__save_active" 
            type="button" 
            name="button" 
            aria-label="Кнопка сохранения фильма">
          </button>

          <button 
            class="movie__buttons element__delete" 
            type="button" 
            name="button" 
            aria-label="Кнопка сохранения фильма">
          </button> */}
          
        </div>
      </div>

    </section>
  );
}

export default MoviesCard;