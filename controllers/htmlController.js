const express = require("express");
const html_router = express.Router();
const path = require("path");
const db = require("../models");

// Routes
// =============================================================


  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  html_router.get("/", function(req, res) {
   
    res.render("index");
  });

  // recipes route loads recipes handlebars
  html_router.get("/recipes", function(req, res) {
    //res.sendFile(path.join(__dirname, ""));
  });

  // users route loads
  html_router.get("/users", function(req, res) {  
    res.render("sign-in");
  });

  html_router.get("/create", function(req, res) {
    res.render("create-recipe")
  });

module.exports = html_router;