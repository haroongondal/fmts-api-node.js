const express = require("express");
const router = express.Router();

let Login;
Login = require('../models/login.model');

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
    // console.log(conn)

    try {
        Login.aggregate([
            {
                $count: "totalcustomer"
            }
        ], function (err, results) {
            if (err) console.log("Customers were not found")
            res.send(results)
        })
    }
            catch(e){
                res.status(400).send("User was not found")
            }




});


module.exports = router;