const mongoose = require('mongoose');

var schema = mongoose.Schema({
	titulo: {
		type: String,
		required: true
	}
});

mongoose.model('Grupo', schema);
