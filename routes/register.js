const express = require("express");
// const mongoose = require('mongoose');
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

router.post('/', function(req, res, next) {
    console.log( req.query.customerID)
    //// console.log(req.body.vchessisno)
    // console.log(conn)


    if(req.query.customerID){
       // console.log(req.body.vchessisno)
        const customerFirstName = req.body.customerFirstName.toString()
        const customerLastName = req.body.customerLastName.toString()
        // const customerNoOfPoints = req.body.customerNoOfPoints.toString()
        const customerAddress = req.body.customerAddress.toString()
        const customerPhoneNo = req.body.customerPhoneNo.toString()

        Login.updateOne(
            { customerID: req.query.customerID }, { $set: {
                userfirstname: customerFirstName,
                    userlastname: customerLastName,
                    // usernoofpoints: customerNoOfPoints,
                    useraddress: customerAddress,
                    userphoneno: customerPhoneNo


            } }, function (err, result) {

                if(err) console.log(err)
                console.log(result);
            });

        res.send({token : 1})

    }

    else{
        console.log("Else condition")
       // console.log(req.body.vchessisno)
        console.log(req.body.customerfname)
        try{
            Login.create({
                    customerID : req.body.customerID,
                    username: req.body.username,
                    password: req.body.password,
                    userfirstname : req.body.customerfname,
                    userlastname: req.body.customerlname,
                    // usernoofpoints: req.body.customernoofpoints,
                    useraddress: req.body.customeraddress,
                    userphoneno: req.body.customerphoneno

                },
                function (err, result) {
                    if(err) console.log(err)
                    console.log(result)
                });

            if(req.body.username === "admin"){
                res.send({
                    token: "admin"
                });
            }
            else if(req.body.username.includes("driver")){
                console.log(req.body.username)
                res.send({
                    token: "driver"
                });
            }

            else{

                res.send({
                    token: "customer"
                });

            }



        }
        catch (err){
            res.status(400).send("Registration Failed")
        }
    }





});


module.exports = router;