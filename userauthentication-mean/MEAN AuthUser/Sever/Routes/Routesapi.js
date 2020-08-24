const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const database = 'mongodb+srv://newuser:newuser@newcluster.4pqot.mongodb.net/test'

mongoose.connect(database, {useNewUrlParser: true, useUnifiedTopology: true},err =>{
    if(err){
        console.log( "Error : "+ err)
    }
    else{
        console.log(" DataBase is connected")
    }
})

router.get('/',function(req,res){
    res.send(" this link is from a new user !!!!!!!!!");
})

module.exports = router;