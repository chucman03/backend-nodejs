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
  getCompany,
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
router.get("/get-company", getCompany);

module.exports = router;
