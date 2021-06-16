const mongoose = require('mongoose');



//Login Schema
const CustomerSchemaIns = mongoose.Schema
const CustomerSchema = new CustomerSchemaIns({
    customerID : String,
    customerfname : String,
    customerlname: String,
    customertype: String,
    customernoofpoints: String,
    customeraddress: String,
    customerphoneno: String
})

const CustomerModelIns = mongoose.model
const  Customer= CustomerModelIns('CustomerManagement',CustomerSchema)


module.exports = Customer