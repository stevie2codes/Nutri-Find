var path = require("path");
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
  });

  // recipes route loads recipes handlebars
  app.get("/recipes", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

  // users route loads
  app.get("/users", function(req, res) {
    // db.User.findAll({}).then(function(results) {
    //   res.render("sign-in",{User:results});     
    // });
    res.sendFile(path.join(__dirname, "../views/sign-in.handlebars"));
  });

};