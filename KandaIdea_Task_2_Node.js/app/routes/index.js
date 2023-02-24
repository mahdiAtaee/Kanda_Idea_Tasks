const express = require("express");
const Router = express.Router();
const authController = require("../controller/authController");
const DashboardController = require("../controller/dashboardController");
module.exports = (app) => {
  app.get("/", authController.showLogin);
  app.post("/login", authController.doLogin);
  app.get("/register", authController.showRegister);
  app.post("/register", authController.doRegister);
  app.get("/dashboard", DashboardController);
};
