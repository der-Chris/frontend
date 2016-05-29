let PouchDB = require('pouchdb');

import { QuestionModel, Visibility } from '../models/Question';
import * as config from '../config';

let questionsDb = new PouchDB(config.baseUrl + config.couchPrefix + '/questions');

export function create(title: string, visibility: Visibility): Promise<QuestionModel> {
	const doc = {
		title,
		visibility,
		meta: {
			createdAt: new Date(),
			userAgent: navigator.userAgent,
			ip: '127.0.0.1' // TODO
		}
	};

	return questionsDb.post(doc);
}

export function fetch(_id: string, visibilityToken?: string): Promise<QuestionModel> {
	return questionsDb.get(_id);
}

export function find(filter: Object): Promise<QuestionModel[]> {
	return questionsDb.allDocs({ include_docs: true })
		.then((res: any) => res.rows.map((row: any) => row.doc));
}