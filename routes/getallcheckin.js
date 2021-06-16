const express = require("express");
const router = express.Router();

let GetAllbookingcheckin;
GetAllbookingcheckin = require('../models/bookingcheckin.model');


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

    if(req.query.driverID){
       // console.log(req.body.vchessisno)

        try{
            GetAllbookingcheckin.find({},{_id:0,__v:0}).where('driverID').equals(req.query.driverID).exec(function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        }
        catch (err){
            res.status(400).send("Could not get Booking Check In Details")
        }
    }
    else
    {
       // console.log(req.body.vchessisno)

        try{
            GetAllbookingcheckin.find({}, {'_id':0,'__v':0}, function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        }
        catch (err){
            res.status(400).send("Could not get Booking Check In Details")
        }
    }




});


module.exports = router;