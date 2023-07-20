/**
 * @author CodeArch_Indonesia <codearchindo@gmail.com>
 * @license MIT
 * @app PerpusKu
 */


const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	productKey: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	}
});
var User = mongoose.model("user", UserSchema);
module.exports = { User }
