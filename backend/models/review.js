var mongoose = require('mongoose');

//require models

var ReviewSchema = new mongoose.Schema({
	created			:{ type: Date, default: Date.now },
	user			:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },

	rating			:Number,
	feedback		:String
});

let Review = module.exports = mongoose.model('review', ReviewSchema);