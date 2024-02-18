const express = require('express')
const router = express.Router()
const {
    getAllTransactions,
} = require('../controllers/transactions')

//get all transactions
router.get('/', getAllTransactions)

module.exports = router