import * as express from 'express';
import { ObjectID } from 'mongodb';

import { db } from '../db';
import { QuestionModel, titleValidator } from '../../client/src/models/Question';

let question = express.Router();
export = question;

question.put('/', (req, res) => {
	// TODO Schema validation
	let titleErr = titleValidator(req.body.title);

	let q: QuestionModel = {
		key: 'key',
		title: req.body.title,
		visibility: req.body.visibility,
		createdAt: new Date().toISOString()
	};

	db.collection('questions').insertOne(q, (err, insertRes) => {
		if (err) return res.status(400).send('');
		else return res.send(insertRes.ops[0]);
	});
});

question.get('/:id', (req, res) => {
	let objectId = new ObjectID(req.params.id);

	db.collection('questions').findOne({ _id: objectId }, (err, q) => {
		if (err) return res.status(404).send('');
		else return res.send(q);
	});
});

question.post('/search', (req, res) => {
	db.collection('questions').find(req.body).toArray((err, results) => {
		if (err) return res.status(404).send('');
		else return res.send(results);
	});
});