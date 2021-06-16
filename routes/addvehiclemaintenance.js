const express = require("express");
const router = express.Router();

let AddVehicleMaintenance;
AddVehicleMaintenance = require('../models/vehiclemaintenance.model');


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
    if(req.query.get == 'yes'){
        
    try{
        GetVehicleMaintenance.find({}, {'_id':0,'__v':0}, function (err, result)   {
            if(err) console.log(err)
            console.log(result)
            res.send(result)
        });
        }
        catch (err){
            res.status(400).send("Could not get Maintenance Details")
        }
    }
    else{
    try{
        AddVehicleMaintenance.create({
                vregno: req.body.vregno,
                vehiclemaintenanceid :req.body.vehiclemaintenanceid,
                partid:req.body.partid,
                partreplacementlocation:req.body.partreplacementlocation,
                partreplacementdate:req.body.partreplacementdate


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
        res.status(400).send("Vehicle Maintenance details  failed to save.")
    }
    }

});


module.exports = router;