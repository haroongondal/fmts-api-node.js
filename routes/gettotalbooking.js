const express = require("express");
const router = express.Router();

let GetAllbooking;
GetAllbooking = require('../models/addbooking.model');


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





router.get('/', function(req, res, next) {

    // console.log(req.body.vchessisno)

   // console.log(req.body.vchessisno)

    try{
        GetAllbooking.aggregate([
            {
                $count: "totalbooking"
            }
        ], function (err, result)   {
            if(err) console.log(err)
            console.log(result)
            res.send(result)
        });
    }
    catch (err){
        res.status(400).send("Could not get Booking Details")
    }


});


module.exports = router;