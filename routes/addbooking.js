const express = require("express");
const router = express.Router();

let AddBooking;
AddBooking = require('../models/addbooking.model');


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
    console.log(req.body.customerID)

   // console.log(req.body.vchessisno)
   if(req.query.bookingID =='yes'){
    AddBooking.updateOne(
        { bookingID: req.body.bookingID}, { $set: {
            status: 'finished',
        } }, function (err, result) {

        if(err) console.log(err)
        console.log(result);
        })
        .then(res.send('finished'))
}    
else{
    try{
        AddBooking.create({
                customerID : req.body.customerID,
                vregno : req.body.vregno,
                bookingID: req.body.bookingid,
                dateofrequirement: req.body.dateofrequirement,
                dateofreturn: req.body.dateofreturn,
                pickuppoint: req.body.pickuppoint,
                destination: req.body.destination,
                bookingdate: req.body.bookingdate,
                status:'not-finished'
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
        res.status(400).send("Customer details  failed to save.")
    }
}

});


module.exports = router;