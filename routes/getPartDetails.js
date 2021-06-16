const express = require("express");
const router = express.Router();

let GetPartDetail;
GetPartDetail = require('../models/partpurchase.model');


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
    if(req.query.partcost=="yes"){
        try{
            GetPartDetail.aggregate([
                {
                    $group:
                        {
                            _id: "$partname",
                            totalCost: {    
                                $sum: "$partcost"      
                        } 
                    }
                }                
            ], function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
    
        }
        catch (err){
            res.status(400).send("Could not get Fuel Details")
        }
    }
    else{
        try{
            GetPartDetail.find({},{'_id':0,'__v':0},function (err,result) {
                if(err) console.log(err)
                res.send(result)
    
            });
    
        }
        catch (err){
            res.status(400).send("Could not get Fuel Details")
        }
    }
});


module.exports = router;