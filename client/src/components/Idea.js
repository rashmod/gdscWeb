import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Idea = ({ data, id }) => {
	const { deleteIdea } = useContext(GlobalContext);

	return (
		<div className='idea'>
			<span className='delete-btn' onClick={() => deleteIdea(id)}>
				&times;
			</span>
			<p className='name'>{data.label}</p>
			<p className='desc'>{data.desc}</p>
		</div>
	);
};

export default Idea;
