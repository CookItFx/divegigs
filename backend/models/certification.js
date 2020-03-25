var mongoose = require('mongoose');

//require models

var CertificationSchema = new mongoose.Schema({
	padi			:{member: String, rating: String, authorized: Boolean, renewed: Boolean, expires: Date},
	sdi				:{identification: String, confirmed: Boolean}, //?????
	ssi				:{member: String, status: Boolean, expires: Date, level: String}
});

let Certification = module.exports = mongoose.model('certification', CertificationSchema);