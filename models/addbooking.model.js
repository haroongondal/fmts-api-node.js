const mongoose = require('mongoose');



//Login Schema
const BookingSchemaIns = mongoose.Schema
const BookingSchema = new BookingSchemaIns({
    bookingID: String,
    customerID : String,
    vregno: String,
    dateofrequirement : String,
    dateofreturn: String,
    pickuppoint: String,
    destination:String,
    bookingdate: String

})

const BookingModelIns = mongoose.model
const  Booking= BookingModelIns('BookingManagement',BookingSchema)


module.exports = Booking