const axios = require("axios");

const getSeriesFromId = async (id) => {
  const url =
    "https://api.themoviedb.org/3/tv/" +
    id +
    "?api_key=eaa42a85812c87f3123038ef1c44278e&language=en-US";
  const response = await axios.get(url);
  return response;
};

module.exports = { getSeriesFromId };
