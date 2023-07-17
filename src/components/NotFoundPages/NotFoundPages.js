import React from 'react';

import { Link } from 'react-router-dom';

import './NotFoundPages.css'

function NotFoundPages() {
	return (
		<section className="page__error">
			<h1 class="page__error_title">404</h1>
			<p class="page__error_subtitle">Страница не найдена</p>
			<Link 
				class="page__error_button-back" 
				to="/">
					Назад
			</Link>
	</section>
	);
}

export default NotFoundPages;