const mongoose = require('mongoose');



//Login Schema
const LoginSchemaIns = mongoose.Schema
const LoginSchema = new LoginSchemaIns({
    customerID:String,
    username : String,
    password : String,
    userfirstname: String,
    userlastname: String,
    usernoofpoints: String,
    useraddress: String,
    userphoneno: String
})

const LoginModelIns = mongoose.model
const  Login= LoginModelIns('LoginManagement',LoginSchema)


module.exports = Login