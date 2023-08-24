const mongoose = require("mongoose");

const staysSchema = new mongoose.Schema({
  title: String,
  hosted: { type: mongoose.Schema.Types.ObjectId, ref: User },
  place: String,
  photo: [String],
  mGuest: Number,
  bedroom: Number,
  beds: Number,
  baths: Number,
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: Service }],
  descibe: String,
  offers: [{ type: mongoose.Schema.Types.ObjectId, ref: Offer }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: Review }],
  price: Number,
  deals: Number,
});

const StayModel = mongoose.model("Stay", staysSchema);
module.exports = StayModel;
