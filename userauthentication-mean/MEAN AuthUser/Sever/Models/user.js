const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema({
    fname:String,
    username : String,
    email : String,
    password : String,
})

module.exports = mongoose.model('user',UserSchema,'Users')