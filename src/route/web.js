const {
  getHomepage,
  getAbc,
  getSample,
  postCreateUser,
  postUpdateUser,
  getCreatePage,
  getUpdatePage,
  postDeleteUser,
  postHandleDeleteUser,
} = require("../controller/homeController");

const express = require("express");
const router = express.Router();
router.get("/", getHomepage);
router.get("/abc", getAbc);
router.get("/h1", getSample);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleDeleteUser);

module.exports = router;
