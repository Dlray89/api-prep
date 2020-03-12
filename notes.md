setting up index file
-import servers in index.js
-set up your port up
-listen to server

-----------------------------
Setting up server:

import express and require it

import and set up thrid party middleware(morgan and helmet) and require

set server to express

let server use middleware

set up crud for practice.

---------------------------------------

set routes up in server by requiring them
and using them

-----------------------------------
build first router 

require express 

set variable to require the route model( const showDB = require(folder))
module.exports = router

import cors to routers
setting up the route

set up a GET

connect to showsDB for the information thats in the data base
then do a get by shows.db 
showsDB
.get()
.then( shows =>{
    set res.status(200).json(shows)
})
.catch( catch the error by status(500).json({errorMessage:"message"}))

set up POST
router.post("/", () => {
    shows.DB.insert().then().catch()
})

-----------------------------------------------------------------

set up delete

router.delete("/", (req,res) => {
    const { id } = params.id
    showsDB
    .remove(id)
    .then(deleteShow => {
        res.status(200).json(deleteShow)
    })
    .catch(error => {
        res.status(500).json({errorMessage})
    })
})
