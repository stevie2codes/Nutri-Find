const express = require("express");
const html_router = express.Router();
const path = require("path");
const db = require("../models");

// Routes
// =============================================================


// Each of the below routes just handles the Handlebars page that the user gets sent to.

// index route loads view.html
html_router.get("/", function (req, res) {

  res.render("index");
});

// recipes route loads recipes handlebars
html_router.get("/recipes", function (req, res) {
  res.render("displayRecipe");
});

// users route loads
html_router.get("/users", function (req, res) {
  res.render("sign-in");
});

html_router.get("/create", function (req, res) {
  console.log("hi");
  db.User.findAll({}).then(function (results) {
    console.log(results);
    res.render("create", { user: results });
  });


});

module.exports = html_router;