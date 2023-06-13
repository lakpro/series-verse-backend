const express = require("express");
const router = express.Router();

const { getSeriesFromQuery } = require("../controllers/searchController");

// call http://localhost:3001/api/search/jack  (jack is the :query) (Gives details of series having this name)
router.route("/:query").get(getSeriesFromQuery);

module.exports = router;
