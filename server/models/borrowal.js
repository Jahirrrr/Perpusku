const mongoose = require('mongoose')

const borrowalSchema = new mongoose.Schema({
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  bookName: {
    type: String,
    required: true
  },
    borrowedDate: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Borrowal', borrowalSchema)
