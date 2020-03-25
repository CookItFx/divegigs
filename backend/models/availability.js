var mongoose = require('mongoose');

//require models

var AvailabilitySchema = new mongoose.Schema({
	weekdays		:[String],
	first_date		:{ type: Date, default: Date.now },
	
	start_time		:String,
	end_time		:String,

	dates			:[{ type: Date}] //optional
});

let Availability = module.exports = mongoose.model('availability', AvailabilitySchema);