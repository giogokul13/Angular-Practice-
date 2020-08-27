const express = require('express');
const router = express.Router();
const User = require('../Models/user')
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose');
const { countDocuments } = require('../Models/user');
const database = 'mongodb+srv://newuser:newuser@newcluster.4pqot.mongodb.net/test'

mongoose.connect(database, {useNewUrlParser: true, useUnifiedTopology: true},err =>{
    if(err){
        console.log( "Error : "+ err)
    }
    else{
        console.log(" DataBase mongoDB is connected");
    }
})

router.get('/',function(req,res){
    res.send(" this link is from   new user !!!!!!!!!");
})


// function verifyToken(req,res,next){
//     if(!req.headers.Authorization){
//         res.status(401);
//         res.send("UnAuthorized request");
//     }
//     let token = req.Headers.Arequest");
// //     }
// //     let payload = jwt.verify(tokuthorization.split(' ')[1]
//     if(token === 'null'){
//         res.status(401);
//         res.send("UnAuthorized en,'secretkey')
//     if(!payload){
//         res.status(401);
//         res.send("UnAuthorized request");
//     }
//     req.userId = payload.subject
//     next()
// }

router.post('/register',function(req,res){
    let userdata = req.body;
    let user = new User(userdata);
    user.save(function(err,registered){
        if(err){
            console.log("Error : "+ err);
        }
        else{
            let payload = { subject : registered._id}
            let token = jwt.sign(payload,'secretkey');
            res.status(200);
            res.send({token})
        }
    })
})  

router.get('/dashboard',function(req,res){
    res.send("this is the dashboard");
})

router.post('/login',function(req,res){
    let userdata = req.body;
    User.findOne( { email : userdata.email } , function(err,user){
        if(err){
            console.log(" Error : " + err);
        }
        else{
            if(!user){
                res.status(401);
                res.send("Invalid emailaddress");
            }
            else{
                if(user.password !== userdata.password){
                    res.status(401);
                    res.send("invalid credentials");
                }
                else{
                    let payload = { subject : user._id}
                    let token = jwt.sign(payload,'secretkey');
                    res.status(200);
                    res.send({token});
                }
            }
        }
    });
})

module.exports = router;