export interface SuggestionModel {
	id?: string;
	questionId: string;
	text: string;
	meta: {
		createdAt: Date;
		userId?: string;
		ip: string;
		userAgent: string;
	};
}

export function textValidator(text: string): string {
	if (text.length < 4) {
		return 'MIN_LENGTH';
	}

	if (!(/^[A-Za-z0-9 \/\-\+,:;\.?!=#'"()]+$/.test(text))) {
		return 'REGEX';
	}

	return null;
}