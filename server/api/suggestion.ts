import * as express from 'express';
import { ObjectID } from 'mongodb';

import { db } from '../db';
import { SuggestionModel, textValidator } from '../../client/src/models/Suggestion';

let router = express.Router();
export = router;

router.put('/', (req, res) => {
	// TODO Schema validation
	let textErr = textValidator(req.body.text);

	let questionId = new ObjectID(req.params.id);

	let suggestion: SuggestionModel = {
		questionId,
		text: req.body.text,
		createdAt: new Date().toISOString()
	};

	db.collection('suggestions').insertOne(suggestion, (err, insertRes) => {
		if (err) return res.status(400).send('');
		else return res.send(insertRes.ops[0]);
	});
});

router.get('/:id', (req, res) => {

});

router.post('/:id', (req, res) => {

});