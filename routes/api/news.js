const express = require("express");
const router = express.Router();
const newsCtrl = require("../../controllers/news/news-api");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/topstories", ensureLoggedIn, newsCtrl.topStories);
router.post("/search", newsCtrl.search);

module.exports = router;
