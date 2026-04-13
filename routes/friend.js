const express = require('express')

const router = express.Router()

let FC = require('../controller/friend')

router.get('/', FC.viewData)
router.post('/createData', FC.createData)
router.post('/deleteData/:id', FC.deleteData)
router.post('/editData/:id', FC.editData)

module.exports = router