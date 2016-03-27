import * as express from 'express';

let app = express.Router();
let v1 = express.Router();
app.use('/v1', v1);

v1.use('/question', require('./question'));
v1.use('/suggestion', require('./suggestion'));

export = app;