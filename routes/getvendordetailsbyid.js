const express = require("express");
const router = express.Router();

let GetAllVendorById;
GetAllVendorById = require('../models/vendor.model');


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

    // console.log(req.body.bookingid) // This will get bookingid submitted in body
    // console.log(req.query) // This will get bookingid via query

   // console.log(req.body.vchessisno)

    try{
        GetAllVendorById.find({}, {'_id':0,'__v':0}).where('vendorID').equals(req.query.vendorid).exec(function (err, result)   {
            // GetAllbookingById.find({}, {'_id':0,'__v':0}, function (err, result)   {
            if(err) console.log(err)
            console.log(result)
            res.send(result)
        });
    }
    catch (err){
        res.status(400).send("Could not get Vendor Details by ID")
    }


});


module.exports = router;