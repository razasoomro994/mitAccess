const express = require('express')
const app = express()
const PORT =4001;
const bodyParser =require("body-parser")
const cors =require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())



const myRoutes= require('./myroutes')
app.use('/mR' ,myRoutes)

app.listen(PORT,function(){
    console.log('server is running on port',PORT)
})
