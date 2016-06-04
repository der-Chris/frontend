import * as express from 'express';
import * as morgan from 'morgan';

import * as proxy from 'express-http-proxy';
import { couchUrl } from './config';

let router = express.Router();
module.exports = router;
router.use(morgan('dev'));

router.get('/', require('./couch-proxy-endpoints/get'));
router.get('/questions', require('./couch-proxy-endpoints/get--questions'));
router.get('/questions/_all_docs', require('./couch-proxy-endpoints/get--questions-_all_docs'));

// Allow all
router.use(proxy(couchUrl));

router.use((req, res, next) => {
	res.status(404).send();
});