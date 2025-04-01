require("dotenv").config();
const express = require("express");
const connection = require("./config/database");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./route/web");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use("/v1", webRoutes);

// TEST connection db

// connection.query("SELECT * FROM Users", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
