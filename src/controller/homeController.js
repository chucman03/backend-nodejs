const { json } = require("express");
const connection = require("../config/database");

const getHomepage = (req, res) => {
  let users = [];
  connection.query("SELECT * FROM Users", function (err, results, fields) {
    users = results; // results contains rows returned by server
    res.send(JSON.stringify(users));
  });
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
