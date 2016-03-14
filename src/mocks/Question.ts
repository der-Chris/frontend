import fetchMock = require('fetch-mock');

let questionDb: any = {};

fetchMock.mock('/hmc-create-question', (req: any) => {
	var id = 'abc';
	questionDb[id] = {
		_id: id,
		name: req.body.name
	};
	
	return questionDb[id];
});

fetchMock.mock('/hmc-fetch-question/:id', (req: any) => {
	return questionDb[req.params.id];
});

console.log('Question mock installed...');