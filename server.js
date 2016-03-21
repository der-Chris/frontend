var express = require('express');
var app = express();

app.use('/build', express.static('./build'));
app.get('*', function (req, res) {
	res.sendFile('index.html', { root: __dirname });
});

app.listen(8000, function () {
	console.log('Listening on port 8000...');
});
