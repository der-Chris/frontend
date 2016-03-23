import * as express from 'express';

let question = express.Router();
export = question;

question.put('/', (req, res) => {
	console.log(req);
	res.send(req.body);
});

question.get('/:id', (req, res) => {
	res.status(404).send('');
});