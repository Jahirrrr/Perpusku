// Import required modules
const express = require("express")
const router = express.Router();

// Import functions from controller
const {
    getReturn,
    getAllReturns,
    addReturn,
    updateReturn,
    deleteReturn
} = require('../controllers/bookReturnController')

router.get("/getAll", (req, res) => getAllReturns(req,res))

router.get("/get/:id", (req, res) => getReturn(req, res))

router.post("/add", (req, res) => addReturn(req, res))

router.put("/update/:id", (req, res) => updateReturn(req, res))

router.delete("/delete/:id", (req, res) => deleteReturn(req, res))

module.exports = router;
