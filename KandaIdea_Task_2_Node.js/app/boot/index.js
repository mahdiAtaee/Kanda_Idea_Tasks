const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(cookieParser());
  app.use(
    session({
      secret: "654fasd84165fasd",
      resave: false,
      saveUninitialized: true,
      name: "login-system",
    })
  );
  app.use(flash());
  app.engine("handlebars", engine());
  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "../views"));
  app.use(express.static(path.join(__dirname, "../../public")));
};
