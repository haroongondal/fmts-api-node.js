const mongoose = require('mongoose');



//Login Schema
const BookingCheckInSchemaIns = mongoose.Schema
const BookingCheckInSchema = new BookingCheckInSchemaIns({
    driverID : String,
    bookingID : String,
    checkindate: String,
    checkoutdate: String

})

const BookingCheckInModelIns = mongoose.model
const  BookingCheckIn= BookingCheckInModelIns('BookingCheckInManagement',BookingCheckInSchema)


module.exports = BookingCheckIn