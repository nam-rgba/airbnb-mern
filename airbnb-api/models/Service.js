const mongoose = require("mongoose");
const BookingModel = require("./Booking");

const servicesSchema = new mongoose.Schema({
  icon: { type: String, require: true },
  name: { type: String, require: true },
  descipt: { type: String, require: true },
});

const ServiceModel = mongoose.model("Service", servicesSchema);
module.exports = ServiceModel;
