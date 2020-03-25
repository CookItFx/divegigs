const mongoose = require('mongoose');

var UserModel = new mongoose.Schema({
	created         :{ type: Date, default: Date.now },

	password		:{ type: String, required: true },

	name	        :{ type: String, required: true },
	email			:{ type: String, required: true },
	address			:{ type: String, required: true },
	phone			:{ type: String, required: true },
	birthday		:{ type: Date, required: true },
	gender			:{ type: String, required: true },
	identification	:{ type: mongoose.Schema.Types.ObjectId, ref: 'image' },

	slogan          :String,
	introduction    :String,
	reviews         :[{ type: mongoose.Schema.Types.ObjectId, ref: 'review' }],
	picture         :{ type: mongoose.Schema.Types.ObjectId, ref: 'image' },

	billing			:{ type: mongoose.Schema.Types.ObjectId, ref: 'billing' },

	certification	:{ type: mongoose.Schema.Types.ObjectId, ref: 'certification' }
});

//custom method to generate authToken 
// User_Model.methods.generateAuthToken = function() { 
//   const token = jwt.sign({ _id: this._id, is_admin: this.is_admin, is_superadmin: this.is_superadmin }, config.get('myprivatekey')); //get the private key from the config file -> environment variable
//   return token;
// }

// function validateUser(user) {
//   const schema = {
//     username: Joi.string().required(),
//     password: Joi.string().required(),
//     color: Joi.optional(),
//     is_admin: Joi.boolean(),
//     is_superadmin: Joi.boolean()
//   };

//   return Joi.validate(user, schema);
// }

let User = module.exports = mongoose.model('user', UserModel);
// module.exports = check_user = validateUser;