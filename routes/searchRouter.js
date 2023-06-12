const express = require("express");
const router = express.Router();

const { getSeriesFromQuery } = require("../controllers/searchController");

// call http://localhost:3001/api/id/1399  (1399 is the :id) (for details of a particular id)

router.route("/:query").get(getSeriesFromQuery);

module.exports = router;
