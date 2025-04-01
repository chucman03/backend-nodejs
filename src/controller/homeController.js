const { json } = require("express");
const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getAbc = (req, res) => {
  res.send("check abc!");
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getAbc,
  getSample,
};
