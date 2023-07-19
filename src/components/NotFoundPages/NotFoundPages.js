import React from 'react';

import { Link } from 'react-router-dom';

import './NotFoundPages.css'

function NotFoundPages() {
	return (
		<section className="page-error">
			<h1 className="page-error__title">404</h1>
			<p className="page-error__subtitle">Страница не найдена</p>
			<Link 
				className="page-error__button" 
				to="/">
					Назад
			</Link>
		</section>
	);
}

export default NotFoundPages;