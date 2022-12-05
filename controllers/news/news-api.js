require("dotenv").config();

module.exports = {
  topStories,
};

async function topStories(req, res) {
  console.log("function being called");
  const newsUrl = new URL("https://newsapi.org/v2/top-headlines?");
  const params = new URLSearchParams({
    language: "en",
    country: "ca",
    apiKey: process.env.REACT_APP_NEWS_KEY,
  });
  console.log(`${newsUrl}${params}`);
  const response = await fetch(`${newsUrl}${params}`);
  const body = await response.json();
  console.log(response);
  console.log(body);
  res.json(body);
}
