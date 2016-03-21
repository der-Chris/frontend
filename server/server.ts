/// <reference path="../typings/main.d.ts" />
/// <reference path="../history.d.ts" />

import 'source-map-support/register';
import * as express from 'express';
import { Request, Response } from 'express';

let app = express();

app.use('/build', express.static('./build/client'));
app.get('*', function (req: Request, res: Response) {
	res.sendFile('index.html', { root: '.' });
});

app.listen(8000, function () {
	console.log('Listening on port 8000...');
});
