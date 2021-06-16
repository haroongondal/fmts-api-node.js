const express = require("express");
const router = express.Router();

let AddVendor;
AddVendor = require('../models/vendor.model');


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

    console.log(req.body.vendorID)

   // console.log(req.body.vchessisno)

    try{
        AddVendor.create({
                vendorID : req.body.vendorID,
                vendorName : req.body.vendorName,
                vendorEmail: req.body.vendorEmail,
                vendorPhoneNo: req.body.vendorPhoneNo,
                vendorContactPerson: req.body.vendorContactPerson
            },
            function (err, result) {
                if(err) console.log(err)
                console.log(result)
            });
        res.send({
            token: 1
        });
    }
    catch (err){
        res.status(400).send("Vendor details  failed to save.")
    }


});


module.exports = router;