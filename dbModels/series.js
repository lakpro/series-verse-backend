const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seriesSchema = new Schema({
  id: Number,
  title: String,
  year: String,
  poster: String,
  country: String,
  vote: Number,
});

module.exports = mongoose.model("Series", seriesSchema);
