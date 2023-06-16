const mongoose = require("mongoose");

const experiencesSchema = new mongoose.Schema({
  hosted: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  photo: [String],
  detail: String,
  time: [Number],
  date: Date,
  maxGuest: Number,
});

const ExperiencesModel = mongoose.model("Experiences", experiencesSchema);

module.exports = ExperiencesModel;
