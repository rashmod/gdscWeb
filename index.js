const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const ideas = require('./routes/ideas');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/ideas', ideas);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`listening on port ${PORT} in ${process.env.NODE_ENV}`.yellow.bold
	)
);
