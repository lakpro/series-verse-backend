const searchService = require("../services/searchService");

exports.getSeriesFromQuery = async (req, res) => {
  try {
    const series = await searchService.getSeriesFromQuery(req.params["query"]);
    res.json({ data: series.data, status: series.status });
  } catch (err) {
    res.status(500).json({ file: "search controller", error: err.message });
  }
};
