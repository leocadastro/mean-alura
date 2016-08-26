const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
var app = express();

//configurações
app.set('secret', 'sessinha');
app.use(express.static('./public'));
app.use(bodyParser.json());

load('models', {cwd: 'app'})
	.then('api')
	.then('routes/auth.js')
	.then('routes')
	.into(app);

module.exports = app;
