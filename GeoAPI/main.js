const express = require('express');
const mongoose = require('mongoose');
const country = require('./database/country');
const river = require('./database/river');

var app = express();
//view engine
app.set('view engine', 'ejs');

var dbURI = 'mongodb://localhost/database1';

mongoose.connect(dbURI);

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

port = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.render('index', {title : 'Home'});
});

app.get('/info',(req,res)=>{
    res.render('info', {title: 'More Info'});
});

app.get('/api/country', (req,res)=>{
    let queryC = req.query.Country;
    console.log(queryC)
    country.findOne({Country:queryC})
    .exec((err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render('country', {title : 'CountryAPI', country: result});
        }
    });
});

app.get('/api/river', (req,res)=>{
    let queryR = req.query.River;
    console.log(queryR)
    river.findOne({River:queryR})
    .exec((err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render('rivers', {title : 'RiverAPI', river: result});
        }
    });
});

app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
});
