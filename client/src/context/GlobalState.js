import { initialData, initialEdges } from '../data';
import { createContext, useReducer } from 'react';
import { AppReducer, edgesReducer } from './AppReducer';

export const GlobalContext = createContext(initialData);

export const GlobalProvider = ({ children }) => {
	const [ideas, ideasDispatch] = useReducer(AppReducer, initialData);
	const [edges, edgesDispatch] = useReducer(edgesReducer, initialEdges);

	const deleteIdea = (id) => {
		ideasDispatch({ type: 'DELETE_IDEA', payload: id });
	};

	const addIdea = (idea) => {
		ideasDispatch({ type: 'ADD_IDEA', payload: idea });
	};

	const setIdea = (idea) => {
		ideasDispatch({ type: 'SET_IDEA', payload: idea });
	};

	const addEdge = (edge) => {
		edgesDispatch({ type: 'ADD_EDGE', payload: edge });
	};

	const setEdge = (edge) => {
		edgesDispatch({ type: 'SET_EDGE', payload: edge });
	};

	return (
		<GlobalContext.Provider
			value={{ ideas, edges, deleteIdea, addIdea, setIdea, setEdge }}>
			{children}
		</GlobalContext.Provider>
	);
};
