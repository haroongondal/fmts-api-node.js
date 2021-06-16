const mongoose = require('mongoose');



//Login Schema
const AssignDriverSchemaIns = mongoose.Schema
const AssignDriverSchema = new AssignDriverSchemaIns({
    driverID : String,
    vregno : String,
    driverName : String,
    bookingID : String,
    assignmentdate: String,
    pickupLocation: String,
    dropLocation: String,
    status:String

})

const AssignDriverModelIns = mongoose.model
const  Assignriver= AssignDriverModelIns('AssignDriverManagement',AssignDriverSchema)


module.exports = Assignriver