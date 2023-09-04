import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import {
	DISPLAY_WIDTH_LARGE,
	DISPLAY_WIDTH_MEDIUM,
	TWELVE_DISPLAYED_CARDS,
	EIGHT_DISPLAYED_CARDS,
	FIVE_DISPLAYED_CARDS,
	THREE_ADDED_CARDS,
	TWO_ADDED_CARDS,
} from '../../../utils/constants';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {

	const { 
		cards,
		onSaveMovie,
		onDeleteMovie,
		savedMovies,
		isSavedFilms,
		isLoading,
		isEmptyList 
	} = props;

	const location = useLocation();

	const [showListMovies, setShowListMovies] = useState(0);

	function showMovie() {
    const display = window.innerWidth;
    if (display > DISPLAY_WIDTH_LARGE) {
      setShowListMovies(TWELVE_DISPLAYED_CARDS);
    } else if (display > DISPLAY_WIDTH_MEDIUM) {
      setShowListMovies(EIGHT_DISPLAYED_CARDS);
    } else {
      setShowListMovies(FIVE_DISPLAYED_CARDS);
    }
  }

  function showMoreMovie() {
    const display = window.innerWidth;
    if (display > DISPLAY_WIDTH_LARGE) {
      setShowListMovies(showListMovies + THREE_ADDED_CARDS);
    } else if (display > DISPLAY_WIDTH_MEDIUM) {
      setShowListMovies(showListMovies + TWO_ADDED_CARDS);
    } else {
      setShowListMovies(showListMovies + TWO_ADDED_CARDS);
    }
  }

	function getSavedMovie(savedMovies, card) {
		return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
	}

	useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", showMovie);
    }, 500);
  });

  useEffect(() => {
    showMovie();
  }, []);

	return (

		<section className='movies'>
			{ isLoading && <Preloader /> }
			{ isEmptyList && !isLoading && (
				<span className='movie__not-found'>Ничего не найдено</span>
			)}

			{ !isEmptyList && !isLoading && (
				<>
				{ location.pathname === '/saved-movies' ? (
					<>
						<div className='movie'>
							{cards.map((film) => (
								<MoviesCard 
									key={isSavedFilms ? film._id : film.id}
									saved={getSavedMovie(savedMovies, film)}
									movie={film}
									movies={cards}
									savedMovies={savedMovies}
									isSavedFilms={isSavedFilms}
									onSaveMovie={onSaveMovie}
									onDeleteMovie={onDeleteMovie}
								/>
							))}
						</div>
					</>
				) : (
					<>
						<div className='movie'>
							{cards.slice(0, showListMovies).map((film) => (
								<MoviesCard 
								key={isSavedFilms ? film._id : film.id}
									saved={getSavedMovie(savedMovies, film)}
									movie={film}
									movies={cards}
									savedMovies={savedMovies}
									isSavedFilms={isSavedFilms}
									onSaveMovie={onSaveMovie}
									onDeleteMovie={onDeleteMovie}
								/>
							))}
						</div>
						{
							cards.length > showListMovies ? (
								<div className='movies__button-container' onClick={showMoreMovie}>
									<button className='movies__button' type='button'>
										Ещё
									</button>
								</div>
							) : (
								''
							)}
					</>
				)}
				</>
			)}
		</section>
	);
}

export default MoviesCardList;