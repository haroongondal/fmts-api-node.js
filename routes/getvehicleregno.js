const express = require("express");
const router = express.Router();

let GetvehicleRegNo;
GetvehicleRegNo = require('../models/vehicle.model');


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

   // console.log(req.body.vchessisno)

    try{
        GetvehicleRegNo.find({}, {'vregno': 1,'_id':0}, function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        // res.send({
        //     token: 1
        // });
    }
    catch (err){
        res.status(400).send("Could not get Vehicle Registration Details")
    }


});


module.exports = router;