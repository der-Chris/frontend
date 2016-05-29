import * as proxy from 'express-http-proxy';
import { couchUrl } from '../config';

module.exports = proxy(couchUrl);