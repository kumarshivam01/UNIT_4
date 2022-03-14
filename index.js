// "mongodb+srv://c2:c2@cluster0.qz9bj.mongodb.net/c2?retryWrites=true&w=majority"

const express = require("express")

const mongoose = require("mongoose")

const app = express()

app.use(express.json())

const Port = 9900

const connect = () =>{
    return mongoose.connect("mongodb+srv://c2:c2@cluster0.qz9bj.mongodb.net/c2?retryWrites=true&w=majority")
}





// USER schema



const userSchema = new mongoose.Schema(
    {
        firstName :{type:String,required:true},
        middleName  :{type:String,required:false},
        lastName :{type:String,required:true},
        age  :{type:String,required:true},
        email  :{type:String,required:true},
        address  :{type:String,required:true},
        gender  :{type:String,required:true},
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
const User = mongoose.model("user",userSchema)




// BRANCH DETAILS Schema




const branchSchema = new mongoose.Schema(
    {
        name   :{type:String,required:true},
        address   :{type:String,optional:false},
        IFSC  :{type:String,required:true},
        MICR   :{type:String,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }
        
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
const Branch = mongoose.model("branch",branchSchema)




// MASTER ACCOUNT Schema



const masterSchema = new mongoose.Schema(
    {
        balance   :{type:String,required:true},
        branchId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"branch",
            required:true
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }
        
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
const Masater = mongoose.model("master",masterSchema)




// SAVING ACCOUNT Schema

const savingSchema = new mongoose.Schema(
    {
        account_number    :{type:String,required:true},
        balance    :{type:String,optional:false},
        interestRate   :{type:String,required:true},
        savingId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"master",
            required:true
        },
        branchId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"branch",
            required:true
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }
        
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
const Saving = mongoose.model("saving",savingSchema)



// FIXED ACCOUNT Schema

const fixedSchema = new mongoose.Schema(
    {
        account_number     :{type:String,required:true},
        balance    :{type:String,optional:false},
        interestRate   :{type:String,required:true},
        startDate      :{type:String,required:true},
        maturityDate     :{type:String,optional:false},
        savingId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"saving",
            required:true
        },
        savingId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"master",
            required:true
        },
        branchId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"branch",
            required:true
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }
        
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
const Fixed = mongoose.model("fixed",fixedSchema)



//USER Crud

app.get("/users", async(req,res) => {
    try{
        const users = await User.find().lean().exec()
        return res.status(200).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

app.get("/users/:id", async(req,res) => {
    try{
        const users = await User.findById(req.params.id).lean().exec()
        return res.status(200).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    } 
})
app.post("/users", async(req,res) => {
    try{
        const users = await User.create(req.body)
        return res.status(201).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
app.patch("/users/:id", async(req,res) => {
    try{
        const users = await User.findByIdAndUpdate(req.params.id)
        return res.status(201).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
app.delete("/users/:id", async(req,res) => {
    try{
        const users = await User.findByIdAndDelete(req.params.id)
        return res.status(201).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

// Branch Crud 



app.listen(Port,async() =>{
    try{
        await connect()
        console.log(`sucessfully port on ${Port}`)
    }catch(err){
        console.log(err)
    }
})
