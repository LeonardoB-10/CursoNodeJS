const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
});
    
const Userdb = mongoose.model('userdb1', userSchema);
module.exports = Userdb;

