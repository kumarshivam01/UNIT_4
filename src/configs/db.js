const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://validation:validation@cluster0.kou7r.mongodb.net/validation?retryWrites=true&w=majority")
}

module.exports= connect;