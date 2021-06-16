const express = require("express");
const router = express.Router();

let AddFuelBudget;
AddFuelBudget = require('../models/fuelbudget.model');


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

    console.log(req.body.totalfuelbudget)

   // console.log(req.body.vchessisno)

   
        if(req.query.ID){
            AddFuelBudget.updateOne(
                {fuelbudgetid:req.query.ID},{$set:{
                    totalfuelbudget: req.body.totalfuelbudget,
                    budgetsetdate : req.body.budgetsetdate,
                    budgetsetby: req.body.budgetsetby
                }},
                function (err, result) {
                    if(err) console.log(err)
                    console.log(result)
                });
                res.send({
                    token: 1
                });
        }
        else{
         try{
            AddFuelBudget.create({
                fuelbudgetid : req.body.fuelbudgetid,
                totalfuelbudget: req.body.totalfuelbudget,
                budgetsetdate : req.body.budgetsetdate,
                budgetsetby: req.body.budgetsetby
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
        res.status(400).send("Fuel budget details failed to save")
    }

 }
});


module.exports = router;