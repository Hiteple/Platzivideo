import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = props => {
	const { id } = props.match.params;
	const hasPlaying = Object.keys(props.playing).length > 0;

	const [loading, changeLoading] = useState(true);

	useEffect(() => {
		props.getVideoSource(id);
		changeLoading(false);
	}, []);

	return loading ? (
		<h1>Loading...</h1>
	) : hasPlaying ? (
		<div className='player'>
			<video controls autoPlay>
				<source src={props.playing.source} type='video/mp4' />
			</video>
			<div className='player__back'>
				<button
					type='button'
					className='player__back--btn'
					onClick={() => props.history.goBack()}
				>
					Back
				</button>
			</div>
		</div>
	) : (
		<Redirect to='/404' />
	);
};

const mapStateToProps = state => {
	return {
		playing: state.playing
	};
};

const mapDispatchToProps = {
	getVideoSource
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
