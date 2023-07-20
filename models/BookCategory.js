/**
 * @author CodeArch_Indonesia <codearchindo@gmail.com>
 * @license MIT
 * @app PerpusKu
 */


const mongoose = require("mongoose");

const BookCategorySchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users"
	},
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("bookcategory", BookCategorySchema);
