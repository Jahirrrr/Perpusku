/**
 * @author CodeArch_Indonesia <codearchindo@gmail.com>
 * @license MIT
 * @app PerpusKu
 */


const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users"
	},
	name: {
		type: String,
		required: true
	},
	abrev: {
		type: String,
		required: true
	},
	desc: { type: String },
	color: { type: String, default: "yellow" },
	students: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "student"
		}
	],
	courses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "course"
		}
	],
	exams: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "exam"
		}
	],
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model("group", GroupSchema);
