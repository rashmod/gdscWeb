export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_IDEA':
			return [...state.filter((idea) => idea.id !== action.payload)];
		case 'ADD_IDEA':
			return [...state, action.payload];
		case 'SET_IDEA':
			return [...state];
		default:
			return state;
	}
};

export const edgesReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EDGE':
			return [...state, action.payload];
		case 'SET_EDGE':
			return [...state];
		default:
			return state;
	}
};
