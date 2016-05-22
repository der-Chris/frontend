export type Visibility = 'public' | 'private' | 'password';

export interface QuestionModel {
	_id?: string;
	visibility: Visibility;
	visibilityToken?: string;
	title: string;
	createdAt: Date;
}

export function titleValidator(title: string): string {
	if (title.length < 4) {
		return 'MIN_LENGTH';
	}

	if (!(/^[A-Za-z0-9 \-\+,:;\.?!'"()]+$/.test(title))) {
		return 'REGEX';
	}

	return null;
}