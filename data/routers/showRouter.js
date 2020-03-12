const express = require('express')
const router = express.Router()

const cors = require('cors')

const showsDB = require('../helpers/showsModel');

//setting up the routers

router.use(cors())

module.exports = router
