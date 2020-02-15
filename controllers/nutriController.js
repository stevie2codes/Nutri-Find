const item = require('../models/nutri-find');
const db = require("../models");

module.exports = function(app){
    app.get("/search", function(req, res) {
        db.Item.findAll({}).then(function(results) {
          res.render("index",{item:results});     
        });
      });
    }