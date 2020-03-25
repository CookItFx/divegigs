var mongoose = require('mongoose');

//require models

var BillingSchema = new mongoose.Schema({
	iban			:String,
	paypal			:String,
	cc				:String,

	address			:String
});

let Payment = module.exports = mongoose.model('billing', BillingSchema);