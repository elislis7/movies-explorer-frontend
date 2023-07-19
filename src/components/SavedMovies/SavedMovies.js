import React from 'react';

import SearchForm from '../Movies/SearchForm/SearchForm';

import image1 from '../../images/1.png';
import image2 from '../../images/2.png';
import image3 from '../../images/3.png';

import './SavedMovies.css'

function SavedMovies() {
	return (

		<main classNameName='saved-movies'>
			<SearchForm />
			<section className="movies">
				<div  className="movie">
					<div className="movie__description">
						<h2 className="movie__title">В погоне за Бенкси</h2>
						<p className="movie__duration">27 минут</p>
					</div>
					<img className="movie__image" src={image1} alt="Постер к фильму"/>
					<div className="movie__container_buttons">
						<button 
							className="movie__buttons element__delete" 
							type="button" 
							name="button" 
							aria-label="Кнопка сохранения фильма">
						</button>
					</div>
				</div>
				<div  className="movie">
					<div className="movie__description">
						<h2 className="movie__title">В погоне за Бенкси</h2>
						<p className="movie__duration">27 минут</p>
					</div>
					<img className="movie__image" src={image2} alt="Постер к фильму"/>
					<div className="movie__container_buttons">
						<button 
							className="movie__buttons element__delete" 
							type="button" 
							name="button" 
							aria-label="Кнопка сохранения фильма">
						</button>
					</div>
				</div>
				<div  className="movie">
					<div className="movie__description">
						<h2 className="movie__title">В погоне за Бенкси</h2>
						<p className="movie__duration">27 минут</p>
					</div>
					<img className="movie__image" src={image3} alt="Постер к фильму"/>
					<div className="movie__container_buttons">
						<button 
							className="movie__buttons element__delete" 
							type="button" 
							name="button" 
							aria-label="Кнопка сохранения фильма">
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default SavedMovies;