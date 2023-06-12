const axios = require("axios");

const getSeriesFromQuery = async (query) => {
  const url =
    "https://api.themoviedb.org/3/search/tv?api_key=eaa42a85812c87f3123038ef1c44278e&query=" +
    query +
    "jack&include_adult=true&language=en-US&page=1";
  const response = await axios.get(url);
  return response;
};

module.exports = { getSeriesFromQuery };
