const seriesService = require("../services/seriesService");

exports.getSeriesList = async (req, res) => {
  try {
    const seriesList = await seriesService.getSeries();
    res.json({ data: seriesList.data, status: seriesList.status });
  } catch (err) {
    res.status(500).json({ file: "controller", error: err.message });
  }
};
