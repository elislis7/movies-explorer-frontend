import { useEffect, useState } from 'react';

import './SavedMovies.css'

import { apiMain } from '../../utils/Api/MainApi';
import { movieFilter } from '../../utils/utils';
import { useMoviesContext } from '../../contexts/CurrentMovieContext';

import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';

function SavedMovies() {

	const [isLoading, setIsLoading] = useState(false);
	const { savedMovies, setSavedMovies } = useMoviesContext();
	const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);
	const [searchParams, setSearchParams] = useState({querry: '', includeShorts: false});

	function handleSearchSubmit(evt) {
		evt.preventDefault();
		
		const {querry, shorts} = evt.target.elements;
		const currentMovieSearch = {querry: querry.value, includeShorts: shorts.checked};
		setSearchParams(currentMovieSearch);
	}

	function handleShortsClick() {
		const newSearchParams = {...searchParams, includeShorts: !searchParams.includeShorts};
		setSearchParams(newSearchParams);
	}

	useEffect(() => {
		setIsLoading(true);

		apiMain.getSavedMovies()
			.then(res => {
				setSavedMovies(res);
			})
			.catch(err => {
				/* setIsPopupOpen(true);
				setText(err); */
			})
			.finally(() => {
				setIsLoading(false);
			})
	}, [setSavedMovies])

	useEffect(() => {
		const currentSearchedMovies = savedMovies.filter(movie => movieFilter(movie, searchParams));
		setSearchedSavedMovies(currentSearchedMovies);
	}, [searchParams, savedMovies])

	return (

		<main classNameName='saved-movies'>
			{
				isLoading 
					? null
					: (
						<SearchForm 
							searchParams={searchParams}
							handleSubmit={handleSearchSubmit}
							setSearchParams={setSearchParams}
							isRequired={false}
							handleShortsClick={handleShortsClick}
						/>
					)
			}

			{
				isLoading
					? <Preloader />
					: <MoviesCardList moviesData={searchedSavedMovies} />
      }
		</main>
	);
}

export default SavedMovies;