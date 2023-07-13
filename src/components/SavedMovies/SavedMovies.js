import React from 'react';

import SearchForm from '../Movies/SearchForm/SearchForm';

import image1 from '../../images/1.png';
import image2 from '../../images/2.png';
import image3 from '../../images/3.png';

import './SavedMovies.css'

function SavedMovies() {
	return (

		<main className='saved-movies'>
			<SearchForm />
			<section class="movies">
				<div  class="movie">
					<div class="movie__description">
						<h2 class="movie__title">В погоне за Бенкси</h2>
						<p class="movie__duration">27 минут</p>
					</div>
					<img class="movie__image" src={image1} alt="#"/>
					<div class="movie__container_buttons">
						<button 
							class="movie__buttons element__delete" 
							type="button" 
							name="button" 
							aria-label="Кнопка сохранения фильма">
						</button>
					</div>
				</div>
				<div  class="movie">
					<div class="movie__description">
						<h2 class="movie__title">В погоне за Бенкси</h2>
						<p class="movie__duration">27 минут</p>
					</div>
					<img class="movie__image" src={image2} alt="#"/>
					<div class="movie__container_buttons">
						<button 
							class="movie__buttons element__delete" 
							type="button" 
							name="button" 
							aria-label="Кнопка сохранения фильма">
						</button>
					</div>
				</div>
				<div  class="movie">
					<div class="movie__description">
						<h2 class="movie__title">В погоне за Бенкси</h2>
						<p class="movie__duration">27 минут</p>
					</div>
					<img class="movie__image" src={image3} alt="#"/>
					<div class="movie__container_buttons">
						<button 
							class="movie__buttons element__delete" 
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