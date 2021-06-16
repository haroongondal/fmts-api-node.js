const express = require("express");
const router = express.Router();

let GetAllbookingById;
GetAllbookingById = require('../models/addbooking.model');


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

    // console.log(req.body.bookingid) // This will get bookingid submitted in body
    // console.log(req.query) // This will get bookingid via query


    if(req.query.bookingid){
       // console.log(req.body.vchessisno)

        try{
            GetAllbookingById.find({}, {'_id':0,'__v':0}).where('bookingID').equals(req.query.bookingid).exec(function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        }
        catch (err){
            res.status(400).send("Could not get Booking Details by ID")
        }
    }
    if(req.query.customerID){
       // console.log(req.body.vchessisno)

        try{
            GetAllbookingById.find({}, {'_id':0,'__v':0}).where('customerID').equals(req.query.customerID).exec(function (err, result)   {

                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        }
        catch (err){
            res.status(400).send("Could not get Booking Details by ID")
        }
    }




});


module.exports = router;