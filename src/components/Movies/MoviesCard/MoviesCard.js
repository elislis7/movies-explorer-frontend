import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css'

import { apiMain } from '../../../utils/Api/MainApi';
import { BEATFILM_URL } from '../../../utils/constants';
import { convertDuration } from '../../../utils/utils';
import { useMoviesContext } from '../../../contexts/CurrentMovieContext';

function MoviesCard(props) {

  const { movieData } = props;
  const location = useLocation();
  const { savedMovie, setSavedMovie } = useMoviesContext();
  
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  /* const [error, setError] = useState(''); */

  function saveMovieHandler() {
    const savingMovieData = {
      ...movieData,
      image: `${BEATFILM_URL}${movieData.image.url}`,
      thumbnail: `${BEATFILM_URL}${movieData.image.formats.thumbnail.url}`,
      movieId: movieData.id,
    };

    delete savingMovieData.id;
    delete savingMovieData.created_at;
    delete savingMovieData.update_at

    apiMain.addMovie(savingMovieData)
      .then((movie) => {
        setSavedMovie([...savedMovie, movie]);
      })
      .catch(err => {
        /* setError(err) */
      })
  }

  const deleteMovieHandler = () => {
    const deleteParam = location.pathname === '/movies'
      ? movieData.id
      : movieData.movieId;

    const deleteMovie = savedMovie.find(movie => movie.movieId === deleteParam);

    apiMain.deleteMovie(deleteMovie._id)
      .then(deleteMovieData => {
        setSavedMovie(savedMovie.filter(movie => movie._id !== deleteMovieData._id));
      })
      .catch((err) => {
        /* setError(err) */
      })
  }

  useEffect(() => {
    setIsMovieSaved(savedMovie.some(movie => movie.movieId === movieData.id || movie.movieId === movieData.movieId));
  }, [savedMovie, movieData])

  return (
    <div  className="movie__card">

      <div className="movie__description">
        <h2 className="movie__title">{movieData.nameRU}</h2>
        <p className="movie__duration">{convertDuration(+movieData.duration)}</p>
      </div>

      <img className="movie__image" 
        src={
          location.pathname === '/movies'
              ? `https://api.nomoreparties.co/${movieData.image.url}`
              : movieData.image
          } 
          alt={movieData.nameRU}
      />

      <div className="movie__container-buttons">
        {location.pathname === '/movies' && (
          <button className={`save save_active_${isMovieSaved ? 'added' : 'add'}`} type='button' onClick={isMovieSaved ? deleteMovieHandler : saveMovieHandler}></button>
        )}

        {location.pathname === '/saved-movies' && (
          <button className={`${isMovieSaved ?  'movie__buttons element__delete' :  ''}`}  type='button' onClick={deleteMovieHandler}></button>
        )}
        <a className='movies-card__trailer' href={movieData.trailerLink} target='_blank' rel='noreferrer'> 
          <img 
            className='movies-card__poster' 
            src={
              location.pathname === '/movies'
                  ? `${BEATFILM_URL}/${movieData.image.url}`
                  : movieData.image
              } 
              alt={movieData.nameRU}
          />
        </a>
      </div>
    </div>
  );
}

export default MoviesCard;