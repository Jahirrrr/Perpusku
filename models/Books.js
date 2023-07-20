/**
 * @author CodeArch_Indonesia <codearchindo@gmail.com>
 * @license MIT
 * @app PerpusKu
 */


 const mongoose = require("mongoose");

 const BooksSchema = mongoose.Schema({
     user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "users"
     },
     publisher: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "publisher"
     },
     bookcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bookcategory"
    },
     name: {
         type: String,
         required: true
     },
     title: {
        type: String,
        required: true
     },
     author: {
         type: String,
         required: true
     },
     publicyear: {
         type: Number,
         required: true
     },
     isbn: {
        type: Number,
        required: true
    },
    goodbooks: {
        type: Number,
        required: true
    },
    damagedbooks: {
        type: Number,
        required: true
    },
     date: {
         type: Date,
         default: Date.now
     }
 });
 
 module.exports = mongoose.model("books", BooksSchema);
 