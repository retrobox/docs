var express = require('express');
var app = express();
app.use(require('cors')())
app.use('/content', express.static('content'))
app.use('/components_explorer', express.static('components_explorer'))
app.use('/config.json', express.static('config.json'))
app.use('/components.json', express.static('components.json'))
var port = process.env.PORT | 9950
console.log("Running on port " + port)
app.listen(port);
