const express = require("express");
const router = express.Router();

let Addcustomer;
Addcustomer = require('../models/customer.model');


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

    // console.log(req.body.vchessisno)

   // console.log(req.body.vchessisno)

    try{
        Addcustomer.create({
                customerID : req.body.customerID,
                customerfname : req.body.customerfname,
                customerlname: req.body.customerlname,
                customertype: req.body.customertype,
                customernoofpoints: req.body.customernoofpoints,
                customeraddress: req.body.customeraddress,
                customerphoneno: req.body.customerphoneno

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
        res.status(400).send("Customer details  failed to save.")
    }


});


module.exports = router;