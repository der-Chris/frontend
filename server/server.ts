/// <reference path="../typings/main.d.ts" />
/// <reference path="../history.d.ts" />

import 'source-map-support/register';
import * as assert from 'assert';
import { MongoClient } from 'mongodb';
import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

// Set up express
let app = express();
app.use(bodyParser.json());
app.use('/build', express.static('./build/client'));
app.use('/api', require('./api'));
app.get('*', (req: Request, res: Response) => {
	res.sendFile('index.html', { root: '.' });
});

let url = 'mongodb://localhost:27017/hmc';
MongoClient.connect(url, (err, db) => {
	assert.equal(null, err);

	// Connection established
	app.listen(8000, () => {
		console.log('Listening on port 8000...');
	});
});