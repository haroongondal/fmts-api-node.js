const mongoose = require('mongoose');




const VehicleFuelSchemaIns = mongoose.Schema
const VehicleFuelSchema = new VehicleFuelSchemaIns({
    vregno : String,
    fuelid : String,
    totalfuellitre: mongoose.Schema.Types.Number,
    priceperlitre: mongoose.Schema.Types.Decimal128,
    fuelrechargingdate: String,
    fuelrecharginglocation: String,
    fuelrechargedby: String


})

const VehicleFuelModelIns = mongoose.model
const  VehicleFueling= VehicleFuelModelIns('VehicleFuelingManagement',VehicleFuelSchema)


module.exports = VehicleFueling
