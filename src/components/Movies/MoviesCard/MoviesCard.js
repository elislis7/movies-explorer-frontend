import React from 'react';
import { Link } from "react-router-dom";

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

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  function handleSaveMovie() {
    if (saved) {
      onDeleteMovie(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      onSaveMovie(movie);
    }
  }

  return (
    <div className='movie__card' key={movie.id}>

      <div className='movie__description'>
        <h2 className='movie__title'>{movie.nameRU}</h2>
        <p className='movie__duration'>{convertDuration(movie.duration)}</p>
      </div>

      <Link to={movie.trailerLink} target='_blank' >
        <img className='movie__image' 
          src={
            isSavedFilms
                ? movie.image
                : `https://api.nomoreparties.co/${movie.image.url}`
            } 
            alt={movie.nameRU}
        />
      </Link>

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
            className='delete-button'
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