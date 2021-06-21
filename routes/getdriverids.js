const express = require("express");
const router = express.Router();

let GetDriverIDs;
GetDriverIDs = require('../models/driver.model');


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
        //To get all those vehicles which are not reserved by where clause and equals conidtion
        GetDriverIDs.find({},{driverID:1,driverfname:1,driverlname:1,_id:0},).where('status').equals('Active').exec(function (err, result)   {
            // GetBooking.find({},{bookingID:1,_id:0}).exec(function (err, result)   {
            if(err) console.log(err)
            console.log(result)
            res.send(result)
        });
        // res.send({
        //     token: 1
        // });
    }
    catch (err){
        res.status(400).send("Could not get Driver IDs")
    }


});


module.exports = router;