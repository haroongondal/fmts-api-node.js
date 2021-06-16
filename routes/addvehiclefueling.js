const express = require("express");
const router = express.Router();

let Addvehiclefueling;
Addvehiclefueling = require('../models/vehiclefuel.model');


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



        Addvehiclefueling.create({
                vregno : req.body.vregno,
                fuelid: req.body.fuelid,
                totalfuellitre : req.body.totalfuellitre,
                priceperlitre: req.body.priceperlitre,
                fuelrechargingdate: req.body.fuelrechargingdate,
                fuelrecharginglocation: req.body.fuelrecharginglocation,
                fuelrechargedby: req.body.fuelrechargedby


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
        res.status(400).send("Vehicle Fueling details failed to save")
    }


});


module.exports = router;