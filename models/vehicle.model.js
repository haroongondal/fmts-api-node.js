const mongoose = require('mongoose');



//Login Schema
const VehicleSchemaIns = mongoose.Schema
const VehicleSchema = new VehicleSchemaIns({
    vregno : String,
    vtype: String,
    vmake : String,
    vmodel: String,
    vchessisno: String,
    vengineno: String
})

const VehicleModelIns = mongoose.model
const  Vehicle= VehicleModelIns('VehicleManagement',VehicleSchema)


module.exports = Vehicle