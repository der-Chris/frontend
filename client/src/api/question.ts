let PouchDB = require('pouchdb');

import { QuestionModel, Visibility } from '../../../common/models/Question';
import * as config from '../config';
import { randomString } from '../util';

let questionsDb = new PouchDB(config.baseUrl + config.couchPrefix + '/questions');
let questionDbs: { [questionId: string]: PouchDB } = {};

export function create(title: string, visibility: Visibility): Promise<QuestionModel> {
	const questionId = randomString(config.questionIdLength);
	const questionDb = new PouchDB(config.baseUrl + config.couchPrefix + '/question-' + questionId);
	questionDbs[questionId] = questionDb;

	const doc: QuestionModel = {
		_id: 'question',
		title,
		visibility,
		meta: {
			createdAt: new Date(),
			userAgent: navigator.userAgent,
			ip: '127.0.0.1' // TODO
		}
	};

	return questionDb.put(doc);
}

export function fetch(_id: string, visibilityToken?: string): Promise<QuestionModel> {
	return questionsDb.get(_id);
}

export function find(filter: Object): Promise<QuestionModel[]> {
	return questionsDb.allDocs({ include_docs: true })
		.then((res: any) => res.rows.map((row: any) => row.doc));
}