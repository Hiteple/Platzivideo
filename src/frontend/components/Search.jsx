import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
	const inputStyle = classNames('input', {
		isHome
	});

	return (
		<section className='main'>
			<h2 className='main__title'>¿What are you looking for?</h2>
			<input type='text' className={inputStyle} placeholder='Search...' />
		</section>
	);
};

export default Search;
