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
//get shows by id set up
router.get("/:id", (req,res) => {
    const { id } =req.params
    showsDB
    .get(id)
    .then(show => {
        res.status(200).json(show)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `Couldnt find what your looking for ${error}`})
    })

})

//get show characters
router.get("/:id/characters", (req,res) => {
    const { id } = req.params
    showsDB
    .getShowsCharacters(id)
    .then(characters => {
        res.status(200).json(characters)
    })
    .catch( error => {
        res.status(500).json({errorMessage: `${error} could not retrieve characters`})
    })
})
//set up post
router.post("/", (req,res) => {
  
    showsDB.insert(req.body)
    .then( () => {
        res.status(201).json(req.body)
    })
    .catch(error => {
        res.status(500).json({errorMessage: ` ${error}couldn't post to the body `})
    })
})

router.delete("/:id", (req,res) => {
    const { id } = req.params
showsDB
.remove(id)
.then(deleteShow => {
    res.status(200).json(deleteShow)
} )
.catch(error => {
    res.status(500).json({errorMessage: `${error} This post couldn't be deleted`})
})
})

router.put("/", (req,res) => {
    const { id } = req.params
    const updateShow = req.body 
    showsDB
    .update(id, updateShow)
    .then(updateShow => {
        res.status(200).json(updateShow)
    })
    .catch(error =>{
        res.status(500).json({erroeMessage: `${error} couldn't update your show`})
    })
})
module.exports = router
