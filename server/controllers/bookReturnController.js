const bookReturn = require('../models/bookReturn')
const mongoose = require("mongoose");
const Book = require("../models/book");

const getReturn = async (req, res) => {
    const returnId = req.params.id;

    bookReturn.findById(returnId, (err, returnBook) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            returnBook
        });
    });
}

const getAllReturns = async (req, res) => {
    bookReturn.aggregate([{
        $lookup: {
            from: "users",
            localField: "memberId",
            foreignField: "_id",
            as: "member"
        },
    },
        {
            $unwind: "$member"
        },]).exec((err, returns) => {
        if (err) {
            return res.status(400).json({success: false, err});
        }

        return res.status(200).json({
            success: true,
            returnsList: returns
        });
    })
}

const addReturn = async (req, res) => {
    const newReturn = {
        ...req.body,
        memberId: mongoose.Types.ObjectId(req.body.memberId),
        bookId: mongoose.Types.ObjectId(req.body.bookId)
    }

    bookReturn.create(newReturn, (err, returnBook) => {
        if (err) {
            return res.status(400).json({success: false, err});
        }

        Book.findByIdAndUpdate(newReturn.bookId, {isAvailable: false}, (err, book) => {
            if (err) {
                return res.status(400).json({success: false, err});
            }

            return res.status(200).json({
                success: true,
                newReturn: returnBook
            });
        });
    })
}

const updateReturn = async (req, res) => {
    const returnId = req.params.id
    const updatedReturn = req.body

    bookReturn.findByIdAndUpdate(returnId,updatedReturn, (err, returnBook) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            updatedReturn: returnBook
        });
    })
}

const deleteReturn = async (req, res) => {
    const returnId = req.params.id

    bookReturn.findByIdAndDelete(returnId, (err, returnBook) => {
        if (err) {
            return res.status(400).json({success: false, err});
        }

        Book.findByIdAndUpdate(returnBook.bookId, {isAvailable: true}, (err, book) => {
            if (err) {
                return res.status(400).json({success: false, err});
            }

            return res.status(200).json({
                success: true,
                deletedReturn: returnBook
            });
        });
    })
}

module.exports = {
    getReturn,
    getAllReturns,
    addReturn,
    updateReturn,
    deleteReturn
}
