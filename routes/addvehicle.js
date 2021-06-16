const express = require("express");
const router = express.Router();

let Addvehicle;
Addvehicle = require('../models/vehicle.model');
let AddvehicleReservationStatus;
AddvehicleReservationStatus = require('../models/vehiclereservationstatus.model');


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
        Addvehicle.create({
                vregno : req.body.vregisterno,
                vtype: req.body.vtype,
                vmake : req.body.vmake,
                vmodel: req.body.vmodel,
                vchessisno: req.body.vchessisno,
                vengineno: req.body.vengineno
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
        res.status(400).send("Registration Failed")
    }
    try{
        AddvehicleReservationStatus.create({
                vregno : req.body.vregisterno,
                vtype: req.body.vtype,
                vreservationstatus: 'Not Reserved'
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
        res.status(400).send("Vehicle Reservation status recording failure")
    }

});


module.exports = router;