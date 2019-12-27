import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

app.get('*', (req, res) => {
	res.send({ holamundo: true });
});

app.listen(
	PORT,
	err => (err ? console.log(err) : null),
	() => console.log('Server listening on port ' + PORT)
);
