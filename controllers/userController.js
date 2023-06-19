// const seriesService = require("../services/seriesService");
// import CircularJSON from "circular-json";
const CircularJSON = require("circular-json");
const express = require("express");

var httpContext = require("express-http-context");

exports.getUser = async (req, res) => {
  try {
    // const seriesList = await seriesService.getSeries();
    // let str = CircularJSON.stringify(req.user);
    // str = JSON.parse(str);
    // res.send(str);
    // const user = httpContext.get("user");
    // console.log("userController get", user);
    // let str = CircularJSON.stringify(user);
    // let str = CircularJSON.stringify(req.app.get("user"));
    // // let str = CircularJSON.stringify(req.locals.user);
    // console.log("str", str);
    // if (str === undefined) {
    //   res.send(false);
    //   return;
    // }
    // str = JSON.parse(str);
    // // res.send(true);
    // res.send(str);

    res.send("deprecated user controller");

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
