


const express = require('express')
const app = express()
const fs = require('fs')


app.get('/',(req,res)=>{
    
    res.send('form submitted')

})

app.listen(5500)