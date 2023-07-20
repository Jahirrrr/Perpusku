/**
 * @author CodeArch_Indonesia <codearchindo@gmail.com>
 * @license MIT
 * @app PerpusKu
 */


const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users"
	},
	group: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "group"
	},
	nameFirst: {
		type: String,
		required: true
	},
	nameLast: {
		type: String,
		required: true
	},
	code: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("student", StudentSchema);
