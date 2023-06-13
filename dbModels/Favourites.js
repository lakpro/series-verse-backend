const mongoose = require("mongoose");

const FavouriteSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  FavouritesList: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Favourites", FavouriteSchema);
