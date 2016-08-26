module.exports = function (app) {
	const mongoose = require('mongoose');
	const jwt = require('jsonwebtoken');

	var api = {};
	var model = mongoose.model('Usuario');

	api.autentica = function (req, res) {
		model
			.findOne({login: req.body.login, senha: req.body.senha})
			.then(function (usuario) {
				if(!usuario){
					console.log("Login ou senha inválidos");
					res.sendStatus(401);
				} else {
					var token = jwt.sign( {login: usuario.login}, app.get('secret'), {
						expiresIn: 86400 // 24 horas
                 	});

					res.set('x-access-token', token);
					res.end();
				}

			}, function (error) {
				console.log(error);
				res.sendStatus(401);
			});
	};

	api.verificaToken = function (req, res, next) {
		var token = req.headers['x-access-token'];

		if(token){
			jwt.verify(token, app.get('secret'), function (error, decoded) {
				if(error){
					console.log("Token rejeitado");
					res.sendStatus(401);
				}

				req.usuario = decoded;
				next();
			})
		} else {
			console.log("Token não enviado");
			res.sendStatus(401);
		}
	};

	return api;
}
