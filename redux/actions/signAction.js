export const login = (userId, name) => {
	return {
		type: 'LOGIN',
		payload: {
			userId: userId,
			name: name,
		},
	};
};
