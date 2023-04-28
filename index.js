const express = require('express')
const app = express()



app.get('/home', (req, res) => {
    res.send("Hello world!!!")
})


app.listen(4000, ()=>{
    'Listening on port 4000'
})