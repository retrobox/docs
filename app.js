var express = require('express');
var app = express();
app.use(require('cors')())
app.use('/content', express.static('content'))
app.use('/config.json', express.static('config.json'))
var port = process.env.PORT | 9950
console.log("Running on port " + port)
app.listen(port);
