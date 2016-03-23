import * as express from 'express';

let question = express.Router();
export = question;

question.get('/:id', (req, res) => {
	res.send("hallo");
});