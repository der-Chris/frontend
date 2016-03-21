/// <reference path='../../../superagent-mocker.d.ts' />

import * as request from 'superagent';
import mocker = require('superagent-mocker');

let mock = mocker(request);
mock.timeout = 2000;

let questionDb: any = {};

mock.post('/hmc-create-question', (req: any) => {
	let id = 'abc';
	questionDb[id] = {
		id: id,
		title: req.body.title
	};

	return questionDb[id];
});

mock.get('/hmc-fetch-question/:id', (req: any) => {
	if (req.params.id in questionDb) return questionDb[req.params.id];
	else return null;
});

console.log('Question mock installed...');