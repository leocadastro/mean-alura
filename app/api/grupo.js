const mongoose = require('mongoose');

var api = {};
var model = mongoose.model('Grupo');

api.lista = function (req, res) {
	model
		.find({})
		.then(function (grupos) {
			res.json(grupos);
		}, function (error) {
			res.status(500).json(error);
		});
};

module.exports = api;
