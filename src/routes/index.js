const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

let routes = (app) => {
  router.post("/", (req , res) => {
    res.send('sai...');
  });
  router.post("/upload", controller.upload);
  //router.get("/files", controller.getListFiles);

  app.use(router);
};

module.exports = routes;
