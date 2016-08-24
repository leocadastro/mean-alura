const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
var app = express();

//configurações
app.use(express.static('./public'));
app.use(bodyParser.json());

load('api', {cwd: 'app'})
	.then('routes')
	.into(app);

module.exports = app;
