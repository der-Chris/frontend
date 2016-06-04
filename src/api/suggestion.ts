import { questionsDb } from '../db';
import * as config from '../config';
import { randomString } from '../util';
import { QuestionModel } from '../common/models/Question';
import { SuggestionModel } from '../common/models/Suggestion';

export function create(text: string, questionId: string, visibilityToken?: string): Promise<SuggestionModel> {
	const suggestionId = randomString(config.questionIdLength);

	const doc: SuggestionModel = {
		_id: suggestionId,
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

export function fetchAll(questionId: string, visibilityToken?: string): Promise<SuggestionModel[]> {
	return questionsDb.allDocs({ include_docs: true })
		.then((res: any) => res.rows.map((row: any) => row.doc));
}