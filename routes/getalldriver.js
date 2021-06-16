const express = require("express");
const router = express.Router();

let GetAlldriver;
GetAlldriver = require('../models/driver.model');


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

    // console.log(req.query.driverid)

   // console.log(req.body.vchessisno)

    try{
        if(req.query.driverid){
            console.log('Query')
            console.log(req.url)
            console.log(req.query.driverid)
            GetAlldriver.find({}, {'_id':0,'__v':0}).where('driverID').equals(req.query.driverid).exec(function (err, result)   {

                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });

        }
        else{
            console.log(req.url)
            GetAlldriver.find({}, {'_id':0,'__v':0}, function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        }

    }
    catch (err){
        res.status(400).send("Could not get Driver Details")
    }


});


module.exports = router;