import React from 'react';

import movie from '../../images/pic__COLOR_pic.png';

import './MoviesCard.css'

function MoviesCard() {
  return (
    <section className="movies">

      <div  className="movie">

        <div className="movie__description">
          <h2 className="movie__title">В погоне за Бенкси</h2>
          <p className="movie__duration">27 минут</p>
        </div>

        <img className="movie__image" src={movie} alt="Постер к фильму"/>

        <div className="movie__container-buttons">
          <button 
            className="save" 
            type="button" 
            name="button" 
            aria-label="Кнопка сохранения фильма">
              Сохранить
          </button>
        </div>
      </div>

    </section>
  );
}

export default MoviesCard;