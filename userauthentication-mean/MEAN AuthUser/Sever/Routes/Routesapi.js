const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send(" this link is from a new user !!!!!!!!!");
})

module.exports = router