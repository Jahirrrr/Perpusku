/**
 * @author CodeArch_Indonesia <codearchindo@gmail.com>
 * @license MIT
 * @app PerpusKu
 */


const mongoose = require("mongoose");

const SchoolSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users"
	},
	logo: {
		fileName: { type: String },
		filePath: { type: String }
	},
	name: {
		type: String,
		required: true
	},
	abrev: { type: String },
	desc: { type: String },
	period: { type: String },
	address: { type: String },
	email: { type: String },
	phone1: { type: String },
	phone2: { type: String },
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("school", SchoolSchema);
