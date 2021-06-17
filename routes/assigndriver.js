const express = require("express");
const router = express.Router();

let Assigndriver;
Assigndriver = require('../models/assigndriver.model');

let VehicleReservationStatus;
VehicleReservationStatus = require('../models/vehiclereservationstatus.model')


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

    console.log(req.body.vregno)

   // console.log(req.body.vchessisno)
    if(req.query.bookingID){
        Assigndriver.updateOne(
            { bookingID: req.query.bookingID,driverID: req.query.driverid}, { $set: {
                status: 'finished',
            } }, function (err, result) {

            if(err) console.log(err)
            console.log(result);
            })
}    
    else{
        try{
            Assigndriver.create({
                    driverID : req.body.driverid,
                    bookingID : req.body.bookingid,
                    vregno : req.body.vregno,
                    assignmentdate: req.body.assignmentdate,
                    driverName: req.body.driverName,
                    pickupLocation: req.body.pickupLocation,
                    dropLocation: req.body.dropLocation,
                    status:'not-finished'
                },
                function (err, result) {
                    if(err) console.log(err)
                    console.log(result)
                });
    
                
            VehicleReservationStatus.updateOne({vregno:req.body.vregno},{$set: {vreservationstatus: "Reserved"}}, function (err, result){
                if(err) console.log(err)
                console.log(result);
            });
    
            res.send({
                token: 1
            });
        }
        catch (err){
            res.status(400).send("Driver details  failed to save.")
        }
    }

});


module.exports = router;