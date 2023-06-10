const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;

module.exports = db;
