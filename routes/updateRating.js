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
    try{
            // console.log(req.body.vchessisno)
            let drating=((parseInt(req.body.driverRating)+parseInt(req.body.dr))/(parseInt(req.body.dc)))
            let count = parseInt(req.body.dc)+1
             AddOrUpdatedriver.updateOne(
                 { driverID: req.query.did }, [{ $set: {
                    driverRating: drating,
                    count:count
                     } }], function (err, result) {
     
                     if(err) console.log(err)
                     console.log(result);
                 });
            // AddOrUpdatedriver.find({driverID:req.query.did}).snapshot().forEach(element => {
            //     element.driverRating=element.driverRating+req.body.driverRating;
            //     AddOrUpdatedriver.save(element);
            // });

            // AddOrUpdatedriver.findAndModify({
            //     query:{driverID:req.query.did},
            //     update:{$set: {driverRating:5} }
                
            // })
             res.send({token : 1})      
            }
            catch (err){
                res.status(400).send("Driver details  failed to Update.")
            }
});


module.exports = router;