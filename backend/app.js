const mongoose = require('mongoose');
const express = require('express')

const router = express.Router();

mongoose.Promise = global.Promise;

//db connect
mongoose.connect('mongodb://localhost/divegigs', {	
													useNewUrlParser: true, 
													useUnifiedTopology: true, 
													auth: { "authSource": "divegigs" }, 
													user: "matt", 
													pass: "@dg2020"
												});

var db = Mongoose.connect('mongodb://localhost/dbname', function(error){
    if(error) console.log(error);

        console.log("connection successful");
});