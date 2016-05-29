import * as proxy from 'express-http-proxy';
import { couchUrl } from '../config';

module.exports = proxy(couchUrl, {
	// Intercept requests
	decorateRequest(req) {
		return req;
	},

	// Intercept reponses
	intercept(rsp, data, req, res, callback) {
		data = JSON.parse(data.toString('utf8'));
		callback(null, JSON.stringify(data));
	}
});