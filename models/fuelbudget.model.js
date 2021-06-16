const mongoose = require('mongoose');
const FuelBudgetSchemaIns = mongoose.Schema
const FuelBudgetSchema = new FuelBudgetSchemaIns({
    fuelbudgetid : String,
    totalfuelbudget : mongoose.Schema.Types.Number,
    budgetsetdate: String,
    budgetsetby: String


})

const FuelBudgetModelIns = mongoose.model
const  FuelBudget= FuelBudgetModelIns('FuelBudgetManagement',FuelBudgetSchema)


module.exports = FuelBudget
