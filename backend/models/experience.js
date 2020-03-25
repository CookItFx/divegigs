var mongoose = require('mongoose');

//require models

var ExperienceSchema = new mongoose.Schema({
	created			:{ type: Date, default: Date.now },
	user			:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
	
	location		:String,
	description		:String,
	inclusive		:[{caption: String, description: String}],
	pictures		:[{ type: mongoose.Schema.Types.ObjectId, ref: 'image' }],
	
	reviews			:[{ type: mongoose.Schema.Types.ObjectId, ref: 'review' }],
	availability	:{ type: mongoose.Schema.Types.ObjectId, ref: 'availability' },
	price			:Number
});

let Experience = module.exports = mongoose.model('experience', ExperienceSchema);