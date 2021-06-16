const express = require("express");
const router = express.Router();

let GetVehicleFuel;
GetVehicleFuel = require('../models/vehiclefuel.model');


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

    // var date = new Date();
    // month = 
    if(req.query.chart == 'yes'){
        try{
            GetVehicleFuel.aggregate([
 
                {
                    $group:
                        {
                            _id:{month:{$month: {$dateFromString:{
                                dateString:  "$fuelrechargingdate"
                            }}}
                            ,day:{$dayOfMonth:{$dateFromString:{
                                dateString:  "$fuelrechargingdate"
                            }}}} ,
                            totalFuelCost: {
                                $sum: { $multiply:
                                        [ "$totalfuellitre" ,
                                            "$priceperlitre"
                                        ]
                                }}
                        }} ,
                        {
                            $sort:{
                             _id:1
                        }}
                        
                        


                
            ]
            ,function (err,result) {
                if(err) console.log(err)
                res.send(result)
    
            });

            // GetVehicleFuel.find({},{'_id':0,'__v':0},function (err,result) {
            //     if(err) console.log(err)
            //     res.send(result)
            // });
        }
        catch (err){
            res.status(400).send("Could not get Fuel Details")
        }
    }
    else{
        try{

            GetVehicleFuel.aggregate([
                {
                    $group:
                        {
                            _id: "$vregno" ,
                            totalFuelCost: {
                                $sum: { $multiply:
                                        [ "$totalfuellitre" ,
                                            "$priceperlitre"
                                        ]
                                }}
    
    
                        }
                }
            ], function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
    
    
        }
        catch (err){
            res.status(400).send("Could not get Driver Details")
        }
    
    }


});


module.exports = router;