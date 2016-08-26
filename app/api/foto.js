const mongoose = require('mongoose');

var api = {};
var model = mongoose.model('Foto');

api.lista = function (req, res) {
	model
		.find({})
		.then(function (fotos) {
			res.json(fotos);
		}, function (error) {
			res.status(500).json(error);
		});
};

api.buscaPorId = function (req, res) {
	model
		.findById(req.params.id)
		.then(function (foto) {
			if(!foto) throw Error('Foto não encontrada');

			res.json(foto);

		}, function (error) {
			res.status(500).json(error);
		});
};

api.removePorId = function (req, res) {
	model
		.remove({_id: req.params.id})
		.then(function () {
			res.sendStatus(204);
		}, function (error) {
			res.status(500).json(error);
		});
};

api.adiciona = function (req, res) {
	var foto = req.body;

	model
		.create(foto)
		.then(function (fotoDb) {
			res.json(fotoDb);
		}, function (error) {
			res.status(500).json(error);
		});
};

api.atualizaPorId = function (req, res) {
	model
		.findByIdAndUpdate(req.params.id, req.body)
		.then(function (foto) {
			res.sendStatus(200);
		}, function (error) {
			res.status(500).json(error);
		});
}

module.exports = function() {
	return api;
};
