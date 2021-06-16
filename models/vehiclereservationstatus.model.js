const mongoose = require('mongoose');



//Login Schema
const VehicleReservationSchemaIns = mongoose.Schema
const VehicleReservationSchema = new VehicleReservationSchemaIns({
    vregno : String,
    vtype: String,
    vreservationstatus: String
})

const VehicleReservationModelIns = mongoose.model
const  VehicleReservation= VehicleReservationModelIns('VehicleReservationManagement',VehicleReservationSchema)


module.exports = VehicleReservation