/* Go to https://www.youtube.com/watch?v=dQw4w9WgXcQ and follow the instructions and code! */

const express = require('express'); //import express and require it

const server = express() // server is set to express


const PORT = 5000 // port set up

server.listen(PORT, () => {
    console.log(`\n ** This is on port http://localhost:${PORT} ** \n `)
})// setting the server up to listen and activate