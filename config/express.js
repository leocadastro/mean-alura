const express = require('express');
const load = require('express-load');
var app = express();

//configurações
app.use(express.static('./public'));

load('api', {cwd: 'app'})
	.then('routes')
	.into(app);

module.exports = app;
