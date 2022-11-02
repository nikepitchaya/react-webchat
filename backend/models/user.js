const mongoose = require('mongoose')

//Schema
let userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    playername: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: Array, require: false },
    password: { type: String, required: true },
})

//Model 
let User = mongoose.model("user", userSchema)

//Exports Model
module.exports = User

module.exports.createNewUser = function (model, data) {
    console.log(model)
    model.save(data)
}
