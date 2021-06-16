const mongoose = require('mongoose');

//Login Schema
const PartPurchaseSchemaIns = mongoose.Schema
const PartPurchaseSchema = new PartPurchaseSchemaIns({
    vendorID : String,
    partID : String,
    partname: String,
    partcost: mongoose.Schema.Types.Number,
    purchasedate: String,
    warrantystartdate: String,
    warrantyenddate: String,
    purchasedby: String

})

const PartPurchaseModelIns = mongoose.model
const  PartPurchase= PartPurchaseModelIns('PartPurchaseManagement',PartPurchaseSchema)


module.exports = PartPurchase