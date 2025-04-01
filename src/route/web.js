const {
  getHomepage,
  getAbc,
  getSample,
  postCreateUser,
} = require("../controller/homeController");

const express = require("express");
const router = express.Router();
router.get("/", getHomepage);
router.get("/abc", getAbc);
router.get("/h1", getSample);
router.post("/create-user", postCreateUser);

module.exports = router;
