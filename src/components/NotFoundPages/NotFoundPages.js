import React from 'react';

import './NotFoundPages.css'

function NotFoundPages() {
	return (
		<section className="page__error">
			<h1 class="page__error_title">404</h1>
			<p class="page__error_subtitle">Страница не найдена</p>
			<button 
				class="page__error_button-back" 
				type="button">
					Назад
			</button>
	</section>
	);
}

export default NotFoundPages;