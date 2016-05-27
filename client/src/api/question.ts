let PouchDB = require('pouchdb');

import { QuestionModel, Visibility } from '../models/Question';

let pubQuestionsDb = new PouchDB('pub-questions');
let questionsDb = new PouchDB('questions');

const baseUrl = '/api/v1/question';

export function create(title: string, visibility: Visibility): Promise<QuestionModel> {
	return new Promise((resolve, reject) => {
		if (visibility === 'public') {
			resolve(pubQuestionsDb.post({
					title,
					visibility
				}));
		}
		else {
			resolve(questionsDb.post({
					title,
					visibility
				}));
		}
	});
}

export function fetch(id: string, visibilityToken?: string): Promise<QuestionModel> {
	return new Promise((resolve, reject) => {
		pubQuestionsDb.get(id)
			.then(resolve)
			.catch(() => {
				resolve(questionsDb.get(id))
			});
	});
}

export function find(filter: Object): Promise<QuestionModel[]> {
	return new Promise((resolve) => {
		pubQuestionsDb.allDocs()
			.then((res) => resolve(res.rows));
	});
}