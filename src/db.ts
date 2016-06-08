let PouchDB = require('pouchdb');
PouchDB.debug.enable('*');

import * as config from './config';
import upgradeDb from './common/db/upgrade';

interface PouchWindow extends Window {
	PouchDB: PouchDB;
	questionsDb: PouchApi;
}

(<PouchWindow>window).PouchDB = PouchDB;

export const questionsDb = new PouchDB('questions');
(<PouchWindow>window).questionsDb = questionsDb;

if (config.couchLocalOnly) {
	upgradeDb(questionsDb);
}
else {
	let remoteQuestionsDb = new PouchDB(config.couchUrl + '/questions');

	/*questionsDb.sync(remoteQuestionsDb, {
		live: true,
		retry: true
	})
	.on('change', function (change: any) {
		// yo, something changed!
		console.log('change', change);
	})
	.on('paused', function (info: any) {
		// replication was paused, usually because of a lost connection
		console.log('paused', info);
	})
	.on('active', function (info: any) {
		// replication was resumed
		console.log('active', info);
	})
	.on('error', function (err: any) {
		// totally unhandled error (shouldn't happen)
		console.log('error', err);
	});
	*/
}