const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')


const server = express()
server.use(helmet())
server.use(morgan)
server.use(express.json())

server.get('/', (req,res) => {
    res.send({message:"Hello world"})
})

module.exports = server
