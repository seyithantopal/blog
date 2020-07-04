export const getJWT = () => {
	return JSON.parse(localStorage.getItem('auth'));
};

export const getToken = () => {
	return JSON.parse(localStorage.getItem('auth')).token;
};
