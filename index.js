const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database/mongo");
const series = require("./dbModels/series");
const seriesRouter = require("./routes/seriesRouter");
const idRouter = require("./routes/idRouter");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

db.on("error", (err) => {
  console.log("err", err);
});
db.on("connected", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/api/series", seriesRouter);
app.use("/api/id", idRouter);

module.exports = app;
