/**
 * @author CodeArch_Indonesia <codearchindo@gmail.com>
 * @license MIT
 * @app PerpusKu
 */

const mongoose = require("mongoose");
const db = "mongodb+srv://perpusku:perpuskukeren@cluster0.m4xrdkc.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});
		console.log(">  MongoDB Connected...");
	} catch (err) {
		console.log(">  Connection to MongoDB failed...");
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
