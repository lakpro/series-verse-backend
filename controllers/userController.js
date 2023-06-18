// const seriesService = require("../services/seriesService");
// import CircularJSON from "circular-json";
const CircularJSON = require("circular-json");
const app = require("../app");

exports.getUser = async (req, res) => {
  try {
    // const seriesList = await seriesService.getSeries();
    // let str = CircularJSON.stringify(req.user);
    // str = JSON.parse(str);
    // res.send(str);
    let str = CircularJSON.stringify(req.app.get("user"));
    console.log("str", str);
    if (str === undefined) {
      res.send(false);
      return;
    }
    str = JSON.parse(str);
    // res.send(true);
    res.send(str);

    // app.use(function (req, res, next) {
    //   req.app.get("userProfile", req.user);
    //   next();
    // });
    // const profile = app.get("userProfile");
    // res.json({ data: profile });
  } catch (err) {
    // return null;
    res.status(500).json({ file: "controller", error: err.message });
  }
};
