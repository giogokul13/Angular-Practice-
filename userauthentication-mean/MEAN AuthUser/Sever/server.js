const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

const api = require('./Routes/RoutesAPI');
app.use('/user',api);
app.get('/',function(req,res){
    res.send(" hi this message is from server");
})


app.listen(3000,function(){
    console.log(" the server is running in port 3000");
})