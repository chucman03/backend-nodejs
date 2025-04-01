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
const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  //   INSERT INTO Users (email,name,city)
  // VALUES ("test","nam","hai phong")

  connection.query(
    `INSERT INTO Users (email,name,city)
     VALUES (?,?,?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("create user succeed");
    }
  );
};

module.exports = {
  getHomepage,
  getAbc,
  getSample,
  postCreateUser,
};
