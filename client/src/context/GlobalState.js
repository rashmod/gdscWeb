// import { initialData, initialEdges } from '../data';
import { createContext, useReducer } from 'react';
import { AppReducer, edgesReducer } from './AppReducer';

import axios from 'axios';

const initialData = { ideas: [], error: null, loading: true };
const initialEdges = { edges: [], error: null, loading: true };

export const GlobalContext = createContext(initialData);

export const GlobalProvider = ({ children }) => {
	const [ideas, ideasDispatch] = useReducer(AppReducer, initialData);
	const [edges, edgesDispatch] = useReducer(edgesReducer, initialEdges);

	const getIdeas = async () => {
		try {
			const res = await axios.get('/api/ideas');

			ideasDispatch({ type: 'GET_IDEAS', payload: res.data.data });
		} catch (err) {
			ideasDispatch({
				type: 'IDEA_ERROR',
				payload: [err.response.data.error, err.response.data.msg],
			});
		}
	};

	const deleteIdea = async (id) => {
		try {
			await axios.delete(`/api/ideas/${id}`);

			ideasDispatch({ type: 'DELETE_IDEA', payload: id });
		} catch (err) {
			ideasDispatch({
				type: 'IDEA_ERROR',
				payload: [err.response.data.error, err.response.data.msg],
			});
		}
	};

	const addIdea = async (idea) => {
		const config = { headers: { 'Content-Type': 'application/json' } };

		try {
			const res = await axios.post('/api/ideas', idea, config);

			ideasDispatch({ type: 'ADD_IDEA', payload: res.data.data });
		} catch (err) {
			ideasDispatch({
				type: 'IDEA_ERROR',
				payload: [err.response.data.error, err.response.data.msg],
			});
		}
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
			value={{
				ideas: ideas.ideas,
				error: ideas.error,
				loading: ideas.loading,
				edges,
				getIdeas,
				deleteIdea,
				addIdea,
				setIdea,
				setEdge,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
