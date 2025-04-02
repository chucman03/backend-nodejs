const { json } = require("express");
const connection = require("../config/database");
const { getAllUser } = require("../service/CRUDservice");

const getHomepage = async (req, res) => {
  let results = await getAllUser();
  return res.render("home.ejs", { listUsers: results });
};

const getAbc = (req, res) => {
  res.send("check abc!");
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  //   INSERT INTO Users (email,name,city)
  // VALUES ("test","nam","hai phong")

  // connection.query(
  //   `INSERT INTO Users (email,name,city)
  //    VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("create user succeed");
  //   }
  // );
  let [result, fields] = await connection.query(
    `INSERT INTO Users (email,name,city)
     VALUES (?,?,?)`,
    [email, name, city]
  );
  res.send("create user succeed");
};

module.exports = {
  getHomepage,
  getAbc,
  getSample,
  postCreateUser,
  getCreatePage,
};
