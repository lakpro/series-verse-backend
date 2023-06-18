const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const seriesRouter = require("./routes/seriesRouter");
const idRouter = require("./routes/idRouter");
const searchRouter = require("./routes/searchRouter");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const indexRouter = require("./routes/indexRouter");
const favouritesRouter = require("./routes/favouritesRouter");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const session = require("express-session");
var MongoStore = require("connect-mongo");
var MongoDBStore = require("connect-mongodb-session")(session);

const db = require("./database/mongo");
const CircularJSON = require("circular-json");

app.use(cookieParser());

// Load config
require("dotenv").config();

// Passport config
require("./controllers/passportMiddleware")(passport);

//new
var store = new MongoDBStore({
  mongooseConnection: db,
  collection: "mySessions",
});
// Catch errors
store.on("error", function (error) {
  console.log(error);
});

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: false,
    // store: MongoStore.create({ mongooseConnection: db }),
    // store: store,
    // cookie: {
    //   maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week

    // },
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
app.use("/api/user", userRouter);
app.use("/api/favourite", favouritesRouter);

// app.get("/user", (req, res) => {
//   res.send(req.user);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
