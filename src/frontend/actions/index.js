export const setFavorite = payload => {
	return {
		type: 'SET_FAVORITE',
		payload
	};
};

export const deleteFavorite = payload => {
	return {
		type: 'DELETE_FAVORITE',
		payload
	};
};

export const loginRequest = payload => {
	return {
		type: 'LOGIN_REQUEST',
		payload
	};
};

export const logoutRequest = payload => {
	return {
		type: 'LOGOUT_REQUEST',
		payload
	};
};

export const registerRequest = payload => {
	return {
		type: 'REGISTER_REQUEST',
		payload
	};
};

export const getVideoSource = payload => {
	return {
		type: 'VIDEO_SOURCE',
		payload
	};
};
