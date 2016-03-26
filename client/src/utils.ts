export function randomString(n: number): string {
	const chars = 'abcdefghijklmnopqrstuvwxyyABCDEFGHIJKLMNOPQRSTUVWXYY0123456789';
	const charsCount = chars.length;

	var buf = new Array(n);
	for (let i=0; i<n; ++i) {
		let rand = Math.floor(Math.random() * charsCount);
		buf.push(chars[rand]);
	}
	return buf.join('');
}