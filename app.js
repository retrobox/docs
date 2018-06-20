var express = require('express');
var app = express();
app.use(require('cors')())
app.use('/content', express.static('content'))
app.use('/config.json', express.static('config.json'))
app.listen(9950);
