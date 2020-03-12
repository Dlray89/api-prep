const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const showRouter = require("./data/routers/showRouter")
const charactersRouter = require("./data/routers/charactersRouter")

const server = express()
server.use(helmet())
server.use(morgan("dev"))
server.use(express.json())
router.use(cors())
server.use("/api/shows", showRouter)
// server.use("/api/chacraters", charactersRouter)



server.get('/', (req,res) => {
    res.status(200).json({message:"Hello world"})
})



module.exports = server
