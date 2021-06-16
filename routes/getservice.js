const express = require("express");
const router = express.Router();

let service;
service = require('../models/vehiclemaintenance.model');


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
        service.aggregate(
            [
              {
                $group:
                  {
                    _id: "$vregno",
                    partreplacementdate: { $max: "$partreplacementdate"}
                  }
              }
            ]
        
        ,function (err,result) {
            if(err) console.log(err)
            res.send(result)

        });

    }
    catch (err){
        res.status(400).send("Services details  failed to save.")
    }


});


module.exports = router;