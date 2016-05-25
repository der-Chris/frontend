export type Visibility = 'public' | 'private' | 'password';

export interface QuestionModel {
	id?: string;
	visibility: Visibility;
	visibilityToken?: string;
	title: string;
	meta: {
		createdAt: Date;
		userId?: string;
		ip: string;
		userAgent: string;
	};
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