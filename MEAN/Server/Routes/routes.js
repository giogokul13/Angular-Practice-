const { hash } = require('bcryptjs');
const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const user = require('../Model/user');
const configKey = require('../config/database')
const User = require('../Model/user');
const { authenticate } = require('passport');

router.post('/register',(req,res,next) =>{
   
    let newUser = new User({
        fullname : req.body.fullname,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    });
    
    User.addUser(newUser,(err,user) =>{
        if(err){
           
        res.json({success : false , msg : "User Not Rgistered"});
        }
        else {
        res.json({success : true , msg : "User Rgistered Successfully"});
        }
    })

})

router.post('/authenticate',(req,res,next) =>{
    // res.send("authenticate");
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username,(err,user) =>{
        if(err){
            return "Error :" + err;
        }
        
        if(!user){
            return json({success : false , msg : "User Not Found"});
        }
        User.ComparePassword(password,user.password,(err,isMatch) =>{
            if(err) {
                return "Error :" + err;
            }
            if(isMatch){
                const token = jwt.sign({user},configKey.SecretKey); //can also add expiresIn in object
                res.json({
                    success : true ,
                    msg : "Valid User",
                    token : 'jwt '+ token,
                    user : {
                        id : user.id,
                        fullname : user.fullname,
                        email : user.email
                    }
                })
            }
            else{
                res.json({
                    success : false,
                    msg : "wrong password"
                })
            }
        })

    })
})

router.get('/validate',(req,res,next) =>{
    res.send("validate");
})

router.get('/profile',passport.authenticate('jwt'),(req,res,next) =>{
    res.send("profile");
})

module.exports = router