const express = require('express')
const router = express.Router()



const characterDB = require("../helpers/charactersModel")




router.get('/', (req,res) => {
    // const query = req.query;
    characterDB
    .get()
    .then(characters => {
        res.status(200).json(characters)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} could not retrive characters`})
    })
})

router.get('/:id', (req,res) => {
    const { id } = req.params
    characterDB
    .get(id)
    .then(characters => {
        res.status(200).json(characters)
    }).catch(error => {
        res.status(500).json({errorMessage: `${error} Cannot fidn what your looking`})
    })
})

router.post("/", (req,res) => {
    const newCharacter = req.body
    characterDB
    .insert(newCharacter)
    .then( newCharacter =>
        res.status(202).json(newCharacter))
    .catch(error => {
        res.status(500).json({errorMessage: `${error} cannot post to body`})
    })
})

router.put("/:id", (req,res) => {
    const { id } = req.param;
    const updateCharacter = req.body
    characterDB
    .update(id, updateCharacter)
    .then(updateCharacter => {
        res.status(200).json(updateCharacter)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} couldn't update your post`})
    })
})

router.delete("/:id", (req,res) => {
    const { id } = req.params;

    characterDB
    .remove(id)
    .then(deleteCharacter => {
        res.status(201).json(deleteCharacter)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}`})
    })
})

module.exports = router