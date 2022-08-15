import React, { useContext, useEffect } from 'react';
import Idea from './Idea';
import { GlobalContext } from '../context/GlobalState';

const IdeaList = () => {
	const { ideas, getIdeas } = useContext(GlobalContext);

	useEffect(() => {
		getIdeas();
	}, []);

	// console.log(ideas);

	return (
		<div className='idealist'>
			{ideas.map((idea) => (
				<Idea key={idea._id} data={idea.data} id={idea._id} />
			))}
		</div>
	);
};

export default IdeaList;
