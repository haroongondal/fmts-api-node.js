const express = require("express");
const router = express.Router();

let AddOrUpdatedriver;
AddOrUpdatedriver = require('../models/driver.model');


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

    if(req.query.driverID){
       // console.log(req.body.vchessisno)
        const driverCNIC = req.body.driverCNIC.toString()
        const driverPhoneNo = req.body.driverPhoneNo.toString()
        const status = req.body.status.toString()
        AddOrUpdatedriver.updateOne(
            { driverID: req.query.driverID }, { $set: {
                    driverCNIC: driverCNIC,
                    driverPhoneNo: driverPhoneNo,
                    status:status


                } }, function (err, result) {

                if(err) console.log(err)
                console.log(result);
            });

        res.send({token : 1})    }
    else{
       // console.log(req.body.vchessisno)

        try{
            AddOrUpdatedriver.create({
                    driverID : req.body.driverID,
                    driverfname : req.body.driverfname,
                    driverlname: req.body.driverlname,
                    driverCNIC: req.body.drivercnic,
                    driverPhoneNo: req.body.driverphoneno,
                    driverRating: 0,
                    count:1,
                    status:'Active'
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
            res.status(400).send("Driver details  failed to save.")
        }
    }




});


module.exports = router;