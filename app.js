require('dotenv').config();
const cors = require("cors");
const express = require("express");
const app = express();


global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(process.env.__PORT, () => {
  console.log(`Running at localhost:${process.env.__PORT}`);
});
