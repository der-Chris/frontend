import * as express from 'express';
import { ObjectID } from 'mongodb';

import { db } from '../db';
import { randomString } from '../../client/src/utils';
import { QuestionModel, titleValidator } from '../../client/src/models/Question';

let router = express.Router();
export = router;

router.put('/', (req, res) => {
	// TODO Schema validation
	let titleErr = titleValidator(req.body.title);

	let q: QuestionModel = {
		key: 'key',
		title: req.body.title,
		visibility: req.body.visibility,
		createdAt: new Date().toISOString()
	};

	if (q.visibility === 'private') {
		q.key = randomString(24);
	}

	db.collection('questions').insertOne(q, (err, insertRes) => {
		if (err) return res.status(400).send('');
		else return res.send(insertRes.ops[0]);
	});
});

router.get('/:id/:key?', (req, res) => {
	let objectId = new ObjectID(req.params.id);

	db.collection('questions').findOne({ _id: objectId }, (err, q) => {
		if (err) return res.status(404).send('');

		if (q.visibility === 'private') {
			// Compare key
			if (!req.params.key || req.params.key !== q.key) {
				return res.status(401).send('');
			}
		}

		return res.send(q);
	});
});

router.post('/search', (req, res) => {
	// TODO limit possible filters, also limit data that could be found (not private/password)

	db.collection('questions').find(req.body).toArray((err, results) => {
		if (err) return res.status(404).send('');
		else return res.send(results);
	});
});