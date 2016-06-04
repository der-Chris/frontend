let PouchDB = require('pouchdb');
window.PouchDB = PouchDB;

import * as config from './config';

export const questionsDb = new PouchDB(config.couchUrl + config.couchPrefix + '/questions');

/*const remoteQuestionsDb = new PouchDB(config.couchUrl + config.couchPrefix + '/questions_test');
export const questionsDb = new PouchDB('questions_test');

questionsDb.sync(remoteQuestionsDb, {
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