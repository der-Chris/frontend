/// <reference path="../typings/main.d.ts" />
/// <reference path="../history.d.ts" />
/// <reference path="../mongodb.d.ts" />

import 'source-map-support/register';
import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import { Db } from 'mongodb';

import { connect } from './db';

// Set up express
let app = express();
app.use(bodyParser.json());
app.use('/build', express.static('./build/client'));
app.use('/api', require('./api'));
app.use('/favicon.png', express.static('./favicon.png'));
app.get('*', (req: Request, res: Response) => {
	res.sendFile('index.html', { root: '.' });
});

connect((db: Db) => {
	// Connection established -> start webserver
	app.listen(8000, () => {
		console.log('Listening on port 8000...');
	});
});