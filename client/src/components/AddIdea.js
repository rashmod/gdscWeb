import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const AddIdea = () => {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const { addIdea } = useContext(GlobalContext);
	const navigate = useNavigate();

	const formSubmit = (e) => {
		e.preventDefault();

		const newIdea = {
			id: Math.floor(Math.random() * 100000000000),
			data: { label: name, desc },
			position: { x: 0, y: 0 },
		};
		addIdea(newIdea);
		setName('');
		setDesc('');
		navigate('/');
	};

	return (
		<>
			<h2 className='add-heading'>Add new Idea</h2>
			<form onSubmit={formSubmit}>
				<div className='form-control'>
					<label htmlFor='label'>Name</label>
					<input
						className='input'
						type='text'
						id='label'
						placeholder='Enter Idea...'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='desc'>Description</label>
					<textarea
						className='input'
						id='desc'
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				</div>
				<button className='submit'>Submit</button>
			</form>
		</>
	);
};

export default AddIdea;
