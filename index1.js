const express = require("express")
const app = express()


const logger = (req,res,next) => {
    console.log("logger route is" , req.originalUrl)
    next();
}
app.use(logger)

app.get('/books',(req,res) => {
    res.send("response")
})
const checkPermission = (req,res,next) => {
    if(req.object == '/libraries' || req.originalUrl == '/authors' ){
        console.log(true)
    }
    else{
        console.log(false)
    }
    // console.log("checkPermission route is" , req.originalUrl)
    
    next();
}
app.use(checkPermission)

app.get('/libraries',(req,res) => {
    res.send("librarian")
})

app.get('/authors',(req,res) => {
    res.send("authors")
})
app.listen(4200)