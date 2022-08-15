const Idea = require('../models/ideas');

// @desc Get all ideas
// @route GET /api/ideas
// @access Public
exports.getIdeas = async (req, res, next) => {
	try {
		const ideas = await Idea.find();

		return res.status(200).json({
			success: true,
			count: ideas.length,
			data: ideas,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error',
			msg: err,
		});
	}
};

// @desc Add ideas
// @route POST /api/ideas
// @access Public
exports.addIdeas = async (req, res, next) => {
	try {
		const idea = await Idea.create(req.body);

		return res.status(201).json({
			success: true,
			data: idea,
		});
	} catch (err) {
		if (err.name === 'ValidationError') {
			const messages = Object.values(err.errors).map(
				(val) => val.message
			);

			return res.status(400).json({
				success: false,
				error: 'Server Error',
				msg: messages,
			});
		} else {
			return res.status(500).json({
				success: false,
				error: 'Server Error',
				msg: err,
			});
		}
	}
};

// @desc delete ideas
// @route DELETE /api/ideas/:id
// @access Public
exports.deleteIdeas = async (req, res, next) => {
	try {
		const idea = await Idea.findById(req.params.id);

		if (!idea) {
			return res.status(404).json({
				success: false,
				error: 'No idea found',
			});
		}

		await idea.remove();

		return res.status(200).json({
			success: true,
			data: {},
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error',
			msg: err,
		});
	}
};
