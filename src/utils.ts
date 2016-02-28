export function copyAssign<T>(target: any, x: T, y: any): T {
	var output = Object(target);

	for (var index = 1; index < arguments.length; index++) {
		var source = arguments[index];
		if (source !== undefined && source !== null) {
			for (var nextKey in source) {
				if (source.hasOwnProperty(nextKey)) {
					output[nextKey] = source[nextKey];
				}
			}
		}
	}
	return output;
}

export function generateUUID(): string {
	function replaceFunc() {
		return (0 | Math.random()*16).toString(16);
	}
	
	return '00000000-0000-4000-8000-000000000000'.replace(/0/g, replaceFunc);
}
