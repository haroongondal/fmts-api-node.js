const mongoose = require('mongoose');



//Login Schema
const DriverSchemaIns = mongoose.Schema
const DriverSchema = new DriverSchemaIns({
    driverID : String,
    driverfname : String,
    driverlname: String,
    driverCNIC: String,
    driverPhoneNo: String,
    driverRating:mongoose.Schema.Types.Decimal128,
    count:mongoose.Schema.Types.Number,
    status:String
})

const DriverModelIns = mongoose.model
const  Driver= DriverModelIns('DriverManagement',DriverSchema)


module.exports = Driver