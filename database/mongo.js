const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;

module.exports = db;
