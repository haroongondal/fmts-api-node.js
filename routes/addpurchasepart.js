const express = require("express");
const router = express.Router();

let AddPurchasePart;
AddPurchasePart = require('../models/partpurchase.model');


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

    try{
        AddPurchasePart.create({
            vendorID: req.body.vendorID,
            partID:req.body.partid,
            partname:req.body.partname,
            partcost:req.body.partcost,
            purchasedate:req.body.purchasedate,
            warrantystartdate: req.body.warrantystartdate,
            warrantyenddate: req.body.warrantyenddate,
            purchasedby: req.body.purchasedby



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
        res.status(400).send("Part purchase details  failed to save.")
    }


});


module.exports = router;