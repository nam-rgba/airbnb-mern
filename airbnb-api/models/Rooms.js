const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  place: String,
  distance: String || Number,
  time: String,
  price: String || Number,
  images: [{ type: String, ref: Number }],
  review: Number||String,
  type: String,
  host: { type: mongoose.Schema.Types.ObjectId, ref: "User" } || String,
  petAble: Boolean,
  maxGuest: Number,
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
  }||String,
  description: String,
  title: String,
});

const Rooms = mongoose.model("Rooms", roomSchema);
module.exports = Rooms;
