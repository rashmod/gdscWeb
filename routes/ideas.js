const express = require('express');

const { getIdeas, addIdeas, deleteIdeas } = require('../controllers/ideas');

const router = express.Router();

router.route('/').get(getIdeas).post(addIdeas);

router.route('/:id').delete(deleteIdeas);

module.exports = router;
