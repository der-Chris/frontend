import 'source-map-support/register';
import * as express from 'express';

let app = express();

app.use('/build', express.static('../client'));
app.get('*', function (req, res) {
	res.sendFile('index.html', { root: '.' });
});

app.listen(8000, function () {
	console.log('Listening on port 8000...');
});
