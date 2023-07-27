import { useLocation } from 'react-router-dom';

import './MoviesCardList.css'

import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {

	const { moviesData } = props;
	const location = useLocation();

	return (
		<section className="movies">

			{ moviesData.length > 0
				? <div className="movie">
					{
						moviesData.map((movie) => (
							<MoviesCard key={
								location.pathname === 'movies'
									? movie.id
									: movie._id
							}
								moviesData={movie}
							/>
						))
					}
				</div>
				: <span className='movie__not-found'>Ничего не найдено</span>
			}
		</section>
	);
}

export default MoviesCardList;