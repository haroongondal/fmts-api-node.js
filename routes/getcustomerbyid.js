const express = require("express");
const router = express.Router();

let GetcustomerDetailsById;
GetcustomerDetailsById = require('../models/login.model');


// function getConnection(){
//      'use strict';
//     const mongoose = require('mongoose');
//     mongoose.connect('mongodb://localhost/fleet_dbs', {useNewUrlParser: true, useUnifiedTopology: true});
//      const db = mongoose.connection;
//      db.on('error', console.error.bind(console, 'connection error:'));
//      db.once('open', function() {
//          console.log("Connected to MongoDB successfully")
//          return 1
//      });
//  }





router.post('/', function(req, res, next) {

    console.log(req.body.customerID)


   // console.log(req.body.vchessisno)

    try{
        GetcustomerDetailsById.find({}, {'_id':0,'__v':0}).where('customerID').equals(req.query.customerID).exec(function (err, result)   {

            if(err) console.log(err)
            console.log(result)
            res.send(result)
        });
    }
    catch (err){
        res.status(400).send("Could not get Customer Details by ID")
    }


});


module.exports = router;