const express = require('express');
const bodyparser = require('body-parser');
const cors = require ('cors');

const port = 9100;
const app = express();
app.use(bodyparser.json());
app.use(cors());

app.get('/',function(req,res){
    res.send("hello from server");
})

app.post('/register',function(req,res){
    console.log(req.body);  
    res.status(200).send({"message" : "data Received"});
})



app.listen(port,function(){
    console.log(" server running on port : " , port);
});