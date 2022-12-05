require("dotenv").config();

module.exports = {
  topStories,
};

async function topStories(req, res) {
  const newsUrl = new URL("https://newsapi.org/v2/top-headlines?");
  const params = new URLSearchParams({
    language: "en",
    country: "ca",
    apiKey: process.env.NEWS_KEY,
  });
  try {
    const response = await fetch(`${newsUrl}${params}`);
    const body = await response.json();
    res.json(body);
  } catch (error) {
    res.status(400).json(error);
  }
}
