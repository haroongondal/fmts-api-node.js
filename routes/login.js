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





router.post('/', function(req, res, next) {
    console.log(req.body.username)
    // console.log(req.body.password)
    console.log(req.body.username.includes("driver"))



   // console.log(req.body.vchessisno)
    // console.log(conn)

    try{
        const query = Login.find({username: req.body.username, password:req.body.password})
        query.exec(function (err,someValue){
            if(err) console.log("User was not found")
            console.log(someValue)
            //If we found user then compare username and send token

            try{
                if(someValue){
                    // if(someValue[0]['username'] == req.body.username){
                    //     res.send({token: 1});
                    //
                    // }

                    if(req.body.username === "admin"){
                        res.send({
                            data: someValue
                        });
                    }
                    else if(req.body.username.includes("driver")){
                        console.log(req.body.username.includes("driver"))
                        console.log(someValue.username)
                        res.send({
                            // token: "driver",user:someValue
                            data: someValue
                        });
                    }

                    else{

                        res.send({
                            // token: "customer",user:someValue
                            data: someValue
                        });

                    }

                }
                else{
                    res.send({token: 0});
                }
            }
            catch(e){
                res.status(400).send("User was not found")
            }
        });

    }
    catch(error){
        res.status(400).send("User does not exist")
    }

});


module.exports = router;