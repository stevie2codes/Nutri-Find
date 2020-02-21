let db = require("../models");
let express = require("express");
let api_router = express.Router();
const path = require("path");


// Find all Users and return them to the user with res.json

api_router.get("/api/newUser", function (req, res) {
  db.User.findAll({}).then(function (results) {
    console.log(results);
    res.render("sign-in", { user: results });
  });
});


//Including the Post model with the user model
api_router.get("/api/newUser", function (req, res) {
  db.User.findAll({
    include: [db.Post]
  }).then(function (data) {
    res.json(data);
  });
});

api_router.get("/api/newUser/:id", function (req, res) {
  db.User.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Post]
  }).then(function (user) {
    res.json(user);
  });
});
api_router.post("/api/newUser", function (req, res) {
  // Create an User with the data available to us in req.body
  db.User.create({
    user_name: req.body.user_name
  }).
    then(function (dbUser) {
      res.json(dbUser);
      res.status(200).end();
    });
});

api_router.delete("/api/newUser/:id", function (req, res) {
  // Delete the User with the id available to us in req.params.id
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    res.end();
  });
});


//Creating api routes for the recipe post

api_router.get("/api/newRecipe", (req, res) => {
  db.Post.findAll({
    include: [db.User]
  }).then(results => {
    console.log(results);
    res.render("displayRecipe", { recipe: results })
  });
});

api_router.get("/api/newRecipe/:id", (req, res) => {
  db.Post.findOne({
    where: {
      id: req.params.id
    },
    include: [db.User]
  }).then(dbPost => {
    res.render(dbPost)
  });
});

api_router.post("/api/newRecipe", (req, res) => {
  console.log(req.body);
  db.Post.create({
    recipeName: req.body.recipeName,
    ingredients: req.body.ingredients,
    directions: req.body.directions,
    UserId: req.body.UserId
  }).then(results => {
    res.json({ results });
    res.status(200).end();
  });
});




module.exports = api_router;