export const initialData = [
	{
		id: '1',
		data: {
			label: 'python',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem?',
		},
		position: {
			x: 0,
			y: 0,
		},
	},
	{
		id: '2',
		data: {
			label: 'java',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem?',
		},
		position: {
			x: Math.floor(Math.random() * 300),
			y: Math.floor(Math.random() * 300),
		},
	},
	{
		id: '3',
		data: {
			label: 'cpp',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing elit. Nam, rem?',
		},
		position: {
			x: Math.floor(Math.random() * 300),
			y: Math.floor(Math.random() * 300),
		},
	},
	{
		id: '4',
		data: {
			label: 'carbon',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem?  dolor sit amet consectetur adipisicin Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, blanditiis!',
		},
		position: {
			x: Math.floor(Math.random() * 300),
			y: Math.floor(Math.random() * 300),
		},
	},
	{
		id: '5',
		data: {
			label: 'html',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem?  dolor sit amet consectetur adipisicin Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, blanditiis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem?  d',
		},
		position: {
			x: Math.floor(Math.random() * 300),
			y: Math.floor(Math.random() * 300),
		},
	},
];

export const initialEdges = [
	{ id: 'e1-2', source: '1', target: '2' },
	{ id: 'e2-3', source: '2', target: '3' },
];
