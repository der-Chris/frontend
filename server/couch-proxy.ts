import * as express from 'express';
import * as morgan from 'morgan';

let router = express.Router();
module.exports = router;
router.use(morgan('dev'));

router.get('/', require('./couch-proxy-endpoints/get'));
router.get('/questions', require('./couch-proxy-endpoints/get--questions'));
