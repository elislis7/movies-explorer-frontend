import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFoundPages.css'

function NotFoundPages() {

	const navigate = useNavigate();

	return (
		<section className='page-error'>
			<h1 className='page-error__title'>404</h1>
			<p className='page-error__subtitle'>Страница не найдена</p>
			<button 
				className='page-error__button' 
				onClick={() => navigate(-1)}>
					Назад
			</button>
		</section>
	);
}

export default NotFoundPages;