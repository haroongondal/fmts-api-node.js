const express = require("express");
const router = express.Router();

let GetdriverAssignment;
GetdriverAssignment = require('../models/assigndriver.model');


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
    console.log(req.query.bookingID)


    if(req.query.bookingID){
        console.log("If condition")
       // console.log(req.body.vchessisno)

        try{
            GetdriverAssignment.find({},{driverID:1,driverName:1,_id:0}).where('bookingID').equals(req.query.bookingID).exec(function (err, result)   {
                // GetBooking.find({},{bookingID:1,_id:0}).exec(function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        }
        catch (err){
            res.status(400).send("Could not get Driver Assignment Details")
        }

    }
    else if(req.query.driverID){
        console.log("Else if conditions")
       // console.log(req.body.vchessisno)

        try{
            GetdriverAssignment.find({},{_id:0,__v:0}).where('driverID').equals(req.query.driverID).exec(function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        }
        catch (err){
            res.status(400).send("Could not get Driver Assignment Details")
        }
    }
    else {
       // console.log(req.body.vchessisno)

        try{
            GetdriverAssignment.find({},{_id:0}, function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        }
        catch (err){
            res.status(400).send("Could not get Driver Assignment Details")
        }
    }




});


module.exports = router;