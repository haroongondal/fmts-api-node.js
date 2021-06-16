const mongoose = require('mongoose');



//Login Schema
const VehicleMaintenanceSchemaIns = mongoose.Schema
const VehicleMaintenanceSchema = new VehicleMaintenanceSchemaIns({
    vregno : String,
    vehiclemaintenanceid : String,
    partid: String,
    partreplacementdate: String,
    partreplacementlocation: String

})

const VehicleMaintenanceModelIns = mongoose.model
const  VehicleMaintenance= VehicleMaintenanceModelIns('VehicleMaintenanceManagement',VehicleMaintenanceSchema)


module.exports = VehicleMaintenance