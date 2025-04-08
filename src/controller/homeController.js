const { json } = require("express");
const connection = require("../config/database");
const {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../service/CRUDservice");

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
  res.redirect("/");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);

  // res.send("Update user succeed");
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);

  // res.send("Update user succeed");
  res.render("delete.ejs", { userEdit: user });
};
const postHandleDeleteUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};
const getCompany = async (req, res) => {
  let results = await getAllUser();
  res.json(results);
};

module.exports = {
  getHomepage,
  getAbc,
  getSample,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleDeleteUser,
  getCompany,
};
