import { questionsDb } from '../db';
import * as config from '../config';
import { randomString } from '../util';
import { QuestionModel, Visibility } from '../common/models/Question';

export function create(title: string, visibility: Visibility): Promise<QuestionModel> {
	const questionId = randomString(config.questionIdLength);
	
	const doc: QuestionModel = {
		_id: questionId,
		type: 'question',
		version: 1,
		title,
		visibility,
		meta: {
			createdAt: new Date(),
			userAgent: navigator.userAgent,
			ip: '127.0.0.1' // TODO
		}
	};

	if (visibility === 'private') {
		const visibilityToken = randomString(config.questionVisibilityTokenLength);
		doc.visibilityToken = visibilityToken;
	}

	return new Promise((resolve, reject) => {
		questionsDb.put(doc)
			.then((res: PouchUpdateResponse) => {
				if (res.ok) return resolve(doc);
				else return reject(res);
			});
	});
}

export function fetch(_id: string, visibilityToken?: string): Promise<QuestionModel> {
	// TODO visibilityToken
	return questionsDb.get(_id);
}

export function query(viewName: string): Promise<QuestionModel[]> {
	return questionsDb.query(viewName, { include_docs: true })
		.then((res: PouchQueryResponse) => res.rows.map((row: any) => row.doc));
}