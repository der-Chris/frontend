/// <reference path='../../superagent-mocker.d.ts' />

import * as request from 'superagent';
import mocker from 'superagent-mocker';

let mock = mocker(request);
mock.timeout = 2000;

let questionDb: any = {};

mock.post('/hmc-create-question', (req: any) => {
	let id = 'abc';
	questionDb[id] = {
		_id: id,
		name: req.body.name
	};

	return questionDb[id];
});

mock.get('/hmc-fetch-question/:id', (req: any) => {
	return questionDb[req.params.id];
});

console.log('Question mock installed...');