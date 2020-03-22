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
												}, function(err) {
													if(err) console.log(error);
													console.log("connection successful");
												});