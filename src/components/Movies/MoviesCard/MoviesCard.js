import React, { useState } from 'react';

import './MoviesCard.css'

import { convertDuration } from '../../../utils/utils';

function MoviesCard(props) {

  const {
    movie,
    saved,
    onSaveMovie,
    onDeleteMovie,
    savedMovies,
    isSavedFilms
  } = props;

  const [isSaved, setIsSaved] = useState(saved);

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  function handleSaveMovie() {
    if (isSaved) {
      onDeleteMovie(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      onSaveMovie(movie);
    }
    setIsSaved(!isSaved);
  }

  return (
    <div className='movie__card' key={movie.id}>

      <div className='movie__description'>
        <h2 className='movie__title'>{movie.nameRU}</h2>
        <p className='movie__duration'>{convertDuration(movie.duration)}</p>
      </div>

      <img className='movie__image' 
        src={
          isSavedFilms
              ? movie.image
              : `https://api.nomoreparties.co/${movie.image.url}`
          } 
          alt={movie.nameRU}
      />

      <div className='movie__container-buttons'>
        { !isSavedFilms ? (
          <button
            className={`save-button ${saved ? 'save-button_active' : ''}`}
            type='button'
            onClick={handleSaveMovie}
          >
            {saved ? null : 'Сохранить'}
          </button>
        ) : (
          <button
            className='movie__buttons element__delete'
            type='button'
            onClick={handleDeleteMovie}
          ></button>
          )
        }
      </div>
    </div>
  );
}

export default MoviesCard;