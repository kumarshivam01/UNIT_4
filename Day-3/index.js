const express = require("express")
const app = express()
app.set('view engine','ejs');
const Data = [
                {books:"GameOfThrones"},
                {books:"HarryPotter"},
                {books:"avengers"}
]

app.get('/books',(req,res) =>{
    res.send(Data)
})

app.get("/books/:name",(req,res)=>{
    // res.sendFile(__dirname+'/book.js')
    console.log(req.params.name)
    res.render('view',{name:req.params.name})
})

app.listen(9858);