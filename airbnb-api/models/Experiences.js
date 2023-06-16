const mongoose = require("mongoose");

const experiencesSchema = new mongoose.Schema({
  hosted: mongoose.Schema.Types.ObjectId,
  title: String,
  photo: [String],
  detail: String,
});
