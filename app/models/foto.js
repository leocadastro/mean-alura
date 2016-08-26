const mongoose = require('mongoose');

var schema = mongoose.Schema({
	titulo: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	descricao: {
		type: String,
		required: false
	},
	grupo: {
		type: String,
		required: true
	}
});

mongoose.model('Foto', schema);
