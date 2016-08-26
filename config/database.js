module.exports = function (uri) {

	const mongoose = require('mongoose');

	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://' + uri);

	mongoose.connection.on('connected', function () {
		console.log('conectado ao banco');
	});

	mongoose.connection.on('error', function (error) {
		console.log('erro: ' + error);
	});

	mongoose.connection.on('disconnected', function () {
		console.log('desconectado do banco');
	});

	process.on('SIGINT', function () {
		mongoose.connection.close(function () {
			process.exit(0);
		});
	});

}
