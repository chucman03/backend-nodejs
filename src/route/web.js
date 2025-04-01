const {
  getHomepage,
  getAbc,
  getSample,
} = require("../controller/homeController");

const express = require("express");
const router = express.Router();
router.get("/", getHomepage);
router.get("/abc", getAbc);
router.get("/h1", getSample);

module.exports = router;
