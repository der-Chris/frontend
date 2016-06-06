import { questionsDb } from '../db';
import * as config from '../config';
import { randomString } from '../util';
import { QuestionModel, Visibility } from '../common/models/Question';

export function create(title: string, visibility: Visibility): Promise<QuestionModel> {
	const questionId = randomString(config.questionIdLength);

	const doc: QuestionModel = {
		_id: questionId,
		title,
		visibility,
		meta: {
			createdAt: new Date(),
			userAgent: navigator.userAgent,
			ip: '127.0.0.1' // TODO
		}
	};

	return questionsDb.put(doc);
}

export function fetch(_id: string, visibilityToken?: string): Promise<QuestionModel> {
	return questionsDb.get(_id);
}

export function find(filter: Object): Promise<QuestionModel[]> {
	return questionsDb.allDocs({ include_docs: true })
		.then((res: any) => res.rows.map((row: any) => row.doc));
}