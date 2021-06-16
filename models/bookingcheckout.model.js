const mongoose = require('mongoose');



//Login Schema
const BookingCheckOutSchemaIns = mongoose.Schema
const BookingCheckOutSchema = new BookingCheckOutSchemaIns({
    driverID : String,
    bookingID : String,
    checkoutdate: String,

})

const BookingCheckOutModelIns = mongoose.model
const  BookingCheckOut= BookingCheckOutModelIns('BookingCheckOutManagement',BookingCheckOutSchema)


module.exports = BookingCheckOut