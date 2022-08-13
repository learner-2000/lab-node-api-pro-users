const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Sample").then(() => {
    console.log("Connected to MongoDb successfully")
}).catch((err) => {
    console.log(err)
})

module.exports = mongoose