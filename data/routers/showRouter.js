const express = require('express')
const router = express.Router()

const cors = require('cors')

const showsDB = require('../helpers/showsModel');

//setting up the routers

router.use(cors())

//get shows
router.get("/", (req,res) => {
    showsDB
    .get()
    .then(shows => {
        res.status(200).json(shows)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `Couldnt find what your looking for ${error}`})
    })

})
module.exports = router
