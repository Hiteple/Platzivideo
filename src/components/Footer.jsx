import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
	<footer className='footer'>
		<Link to='/'>Terms of use</Link>
		<Link to='/'>Privacy policy</Link>
		<Link to='/'>Help center</Link>
	</footer>
);

export default Footer;
