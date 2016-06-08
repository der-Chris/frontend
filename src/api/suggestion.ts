import { questionsDb } from '../db';
import * as config from '../config';
import { randomString } from '../util';
import { QuestionModel } from '../common/models/Question';
import { SuggestionModel } from '../common/models/Suggestion';

export function create(text: string, questionId: string, visibilityToken?: string): Promise<SuggestionModel> {
	const suggestionId = randomString(config.questionIdLength);

	const doc: SuggestionModel = {
		_id: suggestionId,
		type: 'suggestion',
		version: 1,
		questionId,
		text,
		meta: {
			createdAt: new Date(),
			userAgent: navigator.userAgent,
			ip: '127.0.0.1' // TODO
		}
	};

	return questionsDb.put(doc);
}

export function fetchAll(question: QuestionModel): Promise<SuggestionModel[]> {
	return questionsDb.query('suggestions/all', { key: question._id, include_docs: true })
		.then((res: PouchQueryResponse) => res.rows.map((row: any) => row.doc));
}