const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
	data: {
		label: {
			type: String,
			trim: true,
			required: [true, 'Please add a name'],
		},
		desc: {
			type: String,
			trim: true,
			required: [true, 'Please add some description'],
		},
	},
	position: {
		x: {
			type: Number,
			trim: true,
			required: true,
		},
		y: {
			type: Number,
			trim: true,
			required: true,
		},
	},
});

module.exports = mongoose.model('Idea', IdeaSchema);
