const idService = require("../services/idService");
const Favourites = require("../dbModels/Favourites");

exports.setFavourites = async (req, res, next) => {
  try {
    const series = await idService.getSeriesFromId(req.params["id"]);
    // console.log(req.params);
    // console.log(series.data);
    try {
      let user = await Favourites.findOne({ googleId: req.params["gid"] });
      if (!user) {
        user = await Favourites.create({
          googleId: req.params["gid"],
          FavouritesList: [],
        });
      }
      console.log(user);

      let FavouritesList = user.FavouritesList;
      //   let user;
      let exist = 0;
      FavouritesList.forEach(function (u) {
        if (!exist && u.id === req.params["id"]) {
          res.send("Favourite already exists");
          exist = 1;
        }
      });
      if (!exist) {
        user.FavouritesList.push({ id: req.params["id"], data: series.data });
        await user.save();
        console.log(user);
        res.send("Favourite added");
      }
    } catch (err) {
      res.status(500).json({ file: "fav user controller", error: err.message });
    }
    // console.log(user);
  } catch (err) {
    res.status(500).json({ file: "fav set controller", error: err.message });
  }
};

exports.removeFavourites = async (req, res) => {
  try {
    const series = await idService.getSeriesFromId(req.params["id"]);

    try {
      let user = await Favourites.findOne({ googleId: req.params["gid"] });
      if (!user) {
        res.send("User does not exist");
      } else {
        console.log(user);
        let FavouritesList = user.FavouritesList;
        //   let user;
        let removed = 0;
        FavouritesList.forEach(function (u) {
          if (u.id === req.params["id"]) {
            FavouritesList.pull(u);
            console.log("Favourite removed");
            removed = 1;
          }
        });

        console.log(user);
        await user.save();
        if (removed) res.send("Favourite removed");
        else {
          res.send("Favourite not found");
        }
      }
    } catch (err) {
      res.status(500).json({ file: "fav remove user", error: err.message });
    }
  } catch (err) {
    res.status(500).json({ file: "fav remove controller", error: err.message });
  }
};
