const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')


const server = express()
server.use(helmet())
server.use(morgan("dev"))
server.use(express.json())
// server.use("/api/shows", showRouters)
// server.use("/api/chacraters", charactersRouter)

const showRouters = require('./data/routers/charactersRouter')
const charactersRouter = require("./data/routers/charactersRouter")

server.get('/', (req,res) => {
    res.status(200).json({message:"Hello world"})
})



module.exports = server
