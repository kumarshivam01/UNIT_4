
//get method with route "" ( also called as home or root route) and return a string called hello
const app = require("express")()

const PORT = 8880;

app.listen(PORT,()=>{
    console.log((`Server running on ${PORT}`))
})
app.get("/home",(req,res) => {
    res.send("hello")
})

//get method with route "/books" and return json of 4 books with any content

const app = require("express")()
// const { appendFile } = require("fs")
const PORT = 8000;
// console.log(express)
app.listen(PORT,()=>{
    console.log((`Server running on ${PORT}`))
})
app.get("/books",(req,res) => {
    res.send({
        hindi:"shivam",
        english:"brajesh",
        mathe:"rohit",
    })
})