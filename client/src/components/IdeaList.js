import React, { useContext } from 'react';
import Idea from './Idea';
import { GlobalContext } from '../context/GlobalState';

const IdeaList = () => {
	const { ideas } = useContext(GlobalContext);

	console.log(ideas);

	return (
		<div className='idealist'>
			{ideas.map((idea) => (
				<Idea key={idea.id} data={idea.data} id={idea.id} />
			))}
		</div>
	);
};

export default IdeaList;
