const express = require("express");
const router = express.Router();

let GetAllvehicleParts;
GetAllvehicleParts = require('../models/partpurchase.model');


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

    console.log(req.query.partID)
    console.log(req.url)

   // console.log(req.body.vchessisno)

    try{

        if(req.query.partID === "YES"){

            console.log(req.query.partID)
            GetAllvehicleParts.find({}, {'partID':1,'_id':0},function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });

        }

        else if(req.query.partID){
            console.log(req.query.partid)
            GetAllvehicleParts.find({}, {'_id':0,'__v':0}).where('partID').equals(req.query.partID).exec(function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        }
        else{
            GetAllvehicleParts.find({}, {'_id':0,'__v':0}, function (err, result)   {
                if(err) console.log(err)
                console.log(result)
                res.send(result)
            });
        }




        // res.send({
        //     token: 1
        // });
    }
    catch (err){
        res.status(400).send("Could not get Vehicle Details")
    }


});


module.exports = router;