const express = require("express");
const router = express.Router();

let GetBooking;
GetBooking = require('../models/addbooking.model');


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
    console.log(req.query.customerID)

    if(req.query.customerID){
       // console.log(req.body.vchessisno)

        try{

            GetBooking.aggregate([
                {
                    $match:
                    {
                        status:'not-finished',
                        customerID:req.query.customerID
                    }
                }
            ]
            ,function (err,result) {
                if(err) console.log(err)
                res.send(result)
    
            });
            
        }
        catch (err){
            res.status(400).send("Could not get Booking Details")
        }
    }
    else{
       // console.log(req.body.vchessisno)

        try{

            GetBooking.find({},{bookingID:1,_id:0}).where('status').equals('not-finished').exec(function (err, result)   {
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
            res.status(400).send("Could not get Booking Details")
        }
    }




});


module.exports = router;