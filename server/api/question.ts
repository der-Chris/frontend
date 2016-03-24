import * as express from 'express';
import { ObjectID } from 'mongodb';

import { db } from '../db';
import { Question, titleValidator } from '../../client/src/models/Question';

let question = express.Router();
export = question;

question.put('/', (req, res) => {
	// TODO Schema validation
	let titleErr = titleValidator(req.body.title);

	let q: Question = {
		key: 'key',
		title: req.body.title,
		visibility: req.body.visibility,
		createdAt: new Date().toISOString()
	};

	db.collection('questions').insertOne(q, (err, _q) => {
		console.log(err, _q);
		res.send(_q);
	});
});

question.get('/:id', (req, res) => {
	let objectId = new ObjectID(req.params.id);

	db.collection('questions').findOne({ _id: objectId }, (err, q) => {
		if (err) return res.status(404).send('');
		else return res.send(q);
	});
});