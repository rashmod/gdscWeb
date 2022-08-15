export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'GET_IDEAS':
			return { ...state, loading: false, ideas: action.payload };
		case 'DELETE_IDEA':
			return {
				...state,
				ideas: state.ideas.filter(
					(idea) => idea._id !== action.payload
				),
			};
		case 'ADD_IDEA':
			return { ...state, ideas: [...state.ideas, action.payload] };
		// case 'SET_IDEA':
		// 	return { ...state };
		case 'IDEA_ERROR':
			return { ...state, error: action.payload };
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
