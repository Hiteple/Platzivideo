import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import twittericon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = props => {
	const [form, setValues] = useState({
		email: ''
	});

	const handleInput = event => {
		setValues({
			...form,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		props.loginRequest(form);
		props.history.push('/');
	};

	return (
		<section className='login'>
			<div className='login__container'>
				<h2>Hello there :)</h2>
				<form className='login__container--form' onSubmit={handleSubmit}>
					<input
						name='email'
						aria-label='Email'
						type='text'
						className='email'
						placeholder='Email'
						onChange={handleInput}
					/>
					<input
						name='password'
						aria-label='Password'
						type='password'
						className='password'
						placeholder='Password'
						onChange={handleInput}
					/>
					<button type='submit' className='submit-btn'>
						Login
					</button>
					<div className='login__container--remember'>
						<input
							aria-label='Remember me'
							type='checkbox'
							name='remmeber'
							value='checkbox'
						/>
						Remember me
						<a href='/'>Forgot your password?</a>
					</div>
				</form>
				<div className='login__container--social-media'>
					<div>
						<img src={googleIcon} alt='Google icon' />
						Login with Google
					</div>
					<div>
						<img src={twittericon} alt='Twitter icon' />
						Login with Twitter
					</div>
				</div>
				<p className='login__container--register'>
					Don't have an account yet?
					<Link to='/register'>Signup</Link>
				</p>
			</div>
		</section>
	);
};

const mapDispatchToProps = {
	loginRequest
};

export default connect(null, mapDispatchToProps)(Login);
