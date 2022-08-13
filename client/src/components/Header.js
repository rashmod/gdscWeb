import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<div className='logo'>IdeaMap</div>
			<div className='links'>
				<Link to='/addIdea'>Add Idea</Link>
				<Link to='/'>All Ideas</Link>
				<Link to='/mindMap'>Mind Map</Link>
			</div>
		</nav>
	);
};

export default Header;
