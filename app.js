const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require("./routes/testAPI");
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const AddvehicleRouter = require('./routes/addvehicle');
const AddvehiclereservationRouter = require('./routes/addvehiclereservationstatus')
const AdddriverRouter = require('./routes/adddriver');
const AddCustomerRouter = require('./routes/addcustomer')
const GetvehicleregistratitonnooRouter = require('./routes/getvehicleregno')
const GetavailablevehicleregnosRouter = require('./routes/getavailablevehicleregno')
const AddbookingRouter = require('./routes/addbooking')
const GetbookingRouter =require('./routes/getbookings')
const GetdriveridsRouter =require('./routes/getdriverids')
const AssignDriverRouter = require('./routes/assigndriver')
const GetAllVehicleRouter = require('./routes/getallvehicle')
const GetAllDriverRouter =require('./routes/getalldriver')
const GetAllBookingRouter =require('./routes/getallbooking')
const GetAllDriverAssignmentRouter =require('./routes/getdriverassignments')
const GetBookingByIDRouter =require('./routes/getbookingbyid')
const BookingCheckInRouter =require('./routes/bookingcheckin')
const BookingCheckOutRouter =require('./routes/bookingcheckout')
const GetAllBookingCheckInRouter = require('./routes/getallcheckin')
const GetAllBookingCheckOutRouter = require('./routes/getallcheckout')
const AddVendorRouter = require('./routes/addvendor')
const GetAllVendorRouter = require('./routes/getallvendor')
const GetAllVendorIDsRouter = require('./routes/getallvendorids')
const GetVehicleTypeRouter = require('./routes/getvehicletype')
const GetTotalVehicleRouter =require('./routes/gettotalvehicle')
const GetTotalBookingRouter = require('./routes/gettotalbooking')
const GetTotalDriverRouter = require('./routes/gettotaldriver')
const GetTotalDriverAssignRouter =require('./routes/gettotaldriverassign')
const GetTotalCustomerRouter = require('./routes/gettotalcustomer')
const GetVendorDetailsByID = require('./routes/getvendordetailsbyid')
const AddPurchasePartRouter = require('./routes/addpurchasepart')
const AddVehicleFuelingRouter = require('./routes/addvehiclefueling')
const GetAllPartsVehicleRouter = require('./routes/getallparts')
const AddVehicleMaintenaneRouter = require('./routes/addvehiclemaintenance')
const GetTotalFuelCostRouter = require('./routes/gettotalfuelcost')
const GetPartWarrantyRouter = require('./routes/getpartswarranty')
const AddFuelBudgetRouter = require('./routes/addfuelbudget')
const GetFuelBudgetRouter = require('./routes/getfuelbudget')
const GetAllCustomerRouter = require('./routes/getallcustomers')
const GetcustomeridsRouter = require('./routes/getcustomerids')
const GetcustomerDetailsByIDRouter = require('./routes/getcustomerbyid')
const GetServiceDetailsRouter = require('./routes/getservice')
const GetFuelDetailsRouter = require('./routes/getFuelData')
const GetMaintenanceRouter = require('./routes/getMaintenanceHistory')
const GetPartsRouter = require('./routes/getPartDetails')
const UpdateRatingRouter = require('./routes/updateRating')





const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use('/api/login',loginRouter)
// app.use('/api/register',registerRouter)
app.use('/api/register',registerRouter)

//Vehicle API Calls

app.use('/api/addvehicle',AddvehicleRouter)
app.use('/api/addvehiclereservation',AddvehiclereservationRouter)
app.use('/api/getvehicleregnos',GetvehicleregistratitonnooRouter)
app.use('/api/getavailablevehicleregnos',GetavailablevehicleregnosRouter)
app.use('/api/getallvehicles',GetAllVehicleRouter)
app.use('/api/getvehicletypebyregno',GetVehicleTypeRouter)
app.use('/api/gettotalvehicle',GetTotalVehicleRouter)
app.use('/api/vehiclefueling',AddVehicleFuelingRouter)
app.use('/api/addvehiclemaintenance',AddVehicleMaintenaneRouter)
app.use('/api/gettotalfuelcost',GetTotalFuelCostRouter)
app.use('/api/addfuelbudget',AddFuelBudgetRouter)
app.use('/api/getfuelbudget',GetFuelBudgetRouter)
app.use('/api/getservices',GetServiceDetailsRouter)
app.use('/api/getallmaintenance',GetMaintenanceRouter)
app.use('/api/getallparts',GetPartsRouter)


//Driver API Calls

app.use('/api/adddriver',AdddriverRouter)
app.use('/api/getdriverids',GetdriveridsRouter)
app.use('/api/assigndriver',AssignDriverRouter)
app.use('/api/getalldrivers',GetAllDriverRouter)
app.use('/api/gettotaldriver',GetTotalDriverRouter)
app.use('/api/gettotaldriverassign',GetTotalDriverAssignRouter)


app.use('/api/addcustomer',AddCustomerRouter)
app.use('/api/gettotalcustomer',GetTotalCustomerRouter)
app.use('/api/getcustomerids',GetcustomeridsRouter)
app.use('/api/getcustomerbyid',GetcustomerDetailsByIDRouter)
app.use('/api/getcustomerbyid',GetcustomerDetailsByIDRouter)
app.use('/api/getallcustomers',GetAllCustomerRouter)

//Booking API Calls
app.use('/api/addbooking',AddbookingRouter)
app.use('/api/getbookings',GetbookingRouter)
app.use('/api/getallbookings',GetAllBookingRouter)
app.use('/api/getbookingbyid',GetBookingByIDRouter)
app.use('/api/bookingcheckin',BookingCheckInRouter)
app.use('/api/bookingcheckout',BookingCheckOutRouter)
app.use('/api/getallbookingcheckin',GetAllBookingCheckInRouter)
app.use('/api/getallbookingcheckout',GetAllBookingCheckOutRouter)
app.use('/api/gettotalbooking',GetTotalBookingRouter)

app.use('/api/getallassignments',GetAllDriverAssignmentRouter)


//Vendor API Calls
app.use('/api/addvendor',AddVendorRouter)
app.use('/api/getallvendors',GetAllVendorRouter)
app.use('/api/getallvendorid',GetAllVendorIDsRouter)
app.use('/api/getvendorbyid',GetVendorDetailsByID)
app.use('/api/partpurchase',AddPurchasePartRouter)
app.use('/api/getallparts',GetAllPartsVehicleRouter)
app.use('/api/getpartswarranty',GetPartWarrantyRouter)
app.use('/api/updateRating',UpdateRatingRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://haroon:fmts@fleet-shard-00-00.qjzz9.mongodb.net:27017,fleet-shard-00-01.qjzz9.mongodb.net:27017,fleet-shard-00-02.qjzz9.mongodb.net:27017/fleet_dbs?ssl=true&replicaSet=atlas-e9unio-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(process.env.PORT || 5000);
    console.log('connected to mongo')
  })
  .catch(err => {
    console.log(err);
  });

// module.exports = app;
