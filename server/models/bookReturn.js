const mongoose = require('mongoose')

const bookReturnSchema = new mongoose.Schema({
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  bookName: {
    type: String,
    required: true
  },
    dueDate: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('bookReturn', bookReturnSchema)
