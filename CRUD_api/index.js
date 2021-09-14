const express = require('express');
const mongoose = require('mongoose');
const user = require('./user.model');
const bodyParser = require('body-parser');

var app = express();
var db = 'mongodb://localhost/database1';

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

port = parseInt(process.env.PORT, 10) || 8000;

app.get('/', (req,res)=>{
    res.send('hello');
});

app.get('/users', (req,res)=>{
    user.find({})
    .exec((err,result)=>{
        if(err){
            res.send('error has occured');
        }
        else{
            res.json(result);
            console.log(result);
        }
    });
});

app.get('/users/:id',(req,res)=>{
    console.log('fetching user...');
    user.findOne({
        _id: req.params.id
    })
    .exec((err,result)=>{
        if(err){
            res.send('error has occured');
        }
        else{
            res.json(result);
            console.log(result);
        }
    });
});

app.post('/user',(req,res)=>{
   var newUser = new user();
   newUser.name = req.body.name;
   newUser.email = req.body.email;
   newUser.skill = req.body.skill;
   
    newUser.save((err,result)=>{
        if(err){
            res.send('error has occured');
        }
        else{
            res.send(result);
            console.log('new user '+ result.name);
        }
    });
});

app.put('/user/:id',(req,res)=>{
    user.findOneAndUpdate({
        _id:req.params.id
    },
    {$set:{skill: req.body.skill}},
    {upsert:true},
    (err,result)=>{
        if(err){
            res.send('error has occured');
        }
        else{
            res.send(result);
        }
    });
});

app.delete('/user/:id',(req,res)=>{
    user.findOneAndRemove({
        _id:req.params.id
    },(err,result)=>{
        if(err){
            res.send('error : operation failed.');
        }
        else{
            console.log(result+' removed');
        }
    });
});

app.listen(port, ()=>{
    console.log('server listening on port '+ port);
});
