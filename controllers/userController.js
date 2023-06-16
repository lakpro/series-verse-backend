// const seriesService = require("../services/seriesService");
// import CircularJSON from "circular-json";
const CircularJSON = require("circular-json");
const app = require("../index");

exports.getUser = async (req, res) => {
  try {
    // const seriesList = await seriesService.getSeries();
    // let str = CircularJSON.stringify(req.user);
    // str = JSON.parse(str);
    // res.send(str);
    let str = CircularJSON.stringify(req.app.get("user"));
    str = JSON.parse(str);
    res.send(str);
    // app.use(function (req, res, next) {
    //   req.app.get("userProfile", req.user);
    //   next();
    // });
    // const profile = app.get("userProfile");
    // res.json({ data: profile });
  } catch (err) {
    return null;
    res.status(500).json({ file: "controller", error: err.message });
  }
};
