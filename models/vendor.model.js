const mongoose = require('mongoose');



//Login Schema
const VendorSchemaIns = mongoose.Schema
const VendorSchema = new VendorSchemaIns({
    vendorID : String,
    vendorName : String,
    vendorEmail: String,
    vendorPhoneNo: String,
    vendorContactPerson: String
})

const VendorModelIns = mongoose.model
const  Vendor= VendorModelIns('VendorManagement',VendorSchema)


module.exports = Vendor