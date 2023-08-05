import React, { useEffect, useState } from 'react';

import './SavedMovies.css';

import { filterMovieDuration, filterMovies } from '../../utils/utils';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies(props) {

	const { savedMovies, onDeleteMovie } = props;

	const [shortMovies, setShortMovies] = useState(false);
	const [filteredMovies, setFilteredMovies] = useState([]);
  const [isNothingFound, setIsNothingFound] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	function handleShortMovies() {
		setShortMovies(!shortMovies);
	}

	function handleSearchSubmit(query) {
		setSearchQuery(query);
	}

	useEffect(() => {
		if (filteredMovies.length === 0) {
			setIsNothingFound(true);
		} else {
			setIsNothingFound(false);
		}
	}, [filteredMovies])

	useEffect(() => {
		const moviesCardList = filterMovies(savedMovies, searchQuery);
		setFilteredMovies(shortMovies 
			? filterMovieDuration(moviesCardList) 
			: moviesCardList);
	}, [savedMovies, shortMovies, searchQuery]);

	return (
		<main className='saved-movies'>
			<SearchForm 
				onSearchMovies={handleSearchSubmit}
				onShortMoviesFilter={handleShortMovies}
			/>

			<MoviesCardList 
				cards={filteredMovies}
        isEmptyList={isNothingFound}
				isSavedFilms={true}
				savedMovies={savedMovies}
        onDeleteMovie={onDeleteMovie}
			/>
		</main>
	);
}

export default SavedMovies;