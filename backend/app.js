const mongoose = require('mongoose');
const express = require('express')

const router = express.Router();

mongoose.Promise = global.Promise;

//db connect
mongoose.connect('mongodb://77.68.91.80:27017/divegigs', {	
													useNewUrlParser: true, 
													useUnifiedTopology: true, 
													auth: { "authSource": "divegigs" }, 
													user: "matt", 
													pass: "@dg2020"
												});


