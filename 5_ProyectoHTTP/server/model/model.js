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
    fecha: {
        type: Date,
        default: Date.now
    },
    gender: String,
    status: String
});
    
const Userdb = mongoose.model('userdb2', userSchema);
module.exports = Userdb;

