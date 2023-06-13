const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const seriesRouter = require("./routes/seriesRouter");
const idRouter = require("./routes/idRouter");
const searchRouter = require("./routes/searchRouter");
const authRouter = require("./routes/authRouter");
const indexRouter = require("./routes/indexRouter");
const favouritesRouter = require("./routes/favouritesRouter");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const session = require("express-session");
const db = require("./database/mongo");

// Load config
require("dotenv").config();

// Passport config
require("./controllers/passportMiddleware")(passport);

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //   secure: false,
    //   // maxAge: 1000 * 10, // 60 seconds
    // },
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use("/", indexRouter);
app.use("/api/series", seriesRouter);
app.use("/api/id", idRouter);
app.use("/api/search", searchRouter);
app.use("/api/auth", authRouter);
app.use("/api/favourite", favouritesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
