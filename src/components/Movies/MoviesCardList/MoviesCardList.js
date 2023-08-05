import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard'
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
    if (display > 1140) {
      setShowListMovies(12);
    } else if (display > 900) {
      setShowListMovies(8);
    } else {
      setShowListMovies(5);
    }
  }

  function showMoreMovie() {
    const display = window.innerWidth;
    if (display > 1140) {
      setShowListMovies(showListMovies + 3);
    } else if (display > 900) {
      setShowListMovies(showListMovies + 2);
    } else {
      setShowListMovies(showListMovies + 2);
    }
  }

	function getSavedMovie(savedMovies, card) {
		console.log(savedMovies)
		return savedMovies.find((savedMovie) => savedMovie.movieId === card.id)
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
									key={film.id || film._id}
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
									key={film.id || film._id}
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