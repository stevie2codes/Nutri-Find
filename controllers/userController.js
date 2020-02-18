let db = require("../models");
let express = require("express");
let api_router = express.Router();
const path = require("path");

// module.exports = function (app) {
// Find all Users and return them to the user with res.json

api_router.get("/api/newUser", function (req, res) {
  db.User.findAll({}).then(function (results) {
    console.log(results);
    res.render("sign-in", { user: results });
  });
});
api_router.post("/api/newUser", function (req, res) {
  // Create an User with the data available to us in req.body
  db.User.create({
    user_name: req.body.user_name
  }).
    then(function (dbUser) {
      res.json({ id: dbUser.id });
      res.status(200).end();
    });
});


api_router.get("/api/newUser", function (req, res) {
  db.User.findAll({}).then(function (data) {
    res.json(data);
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


// api_router.get("/api/users/:id", function (req, res) {
//   // Find one User with the id in req.params.id and return them to the user with res.json
//   db.User.findOne({
//     where: {
//       id: req.params.id
//     },
//     include: [db.User]
//   }).then(function (dbUser) {
//     res.json(dbUser);
//   });
// });



//Creating api routes for the recipe post

api_router.get("/api/newRecipe", (req, res) => {
  db.Post.findAll({}).then(results => {
    console.log(results);
    res.render("displayRecipe", { recipe: results })
  });
});

api_router.post("/api/newRecipe", (req, res) => {
  db.Post.create({
    recipeName: req.body.recipeName,
    ingredients: req.body.ingredients,
    directions: req.body.directions
  }).then(results => {
    res.json({ id: results.id });
    res.status(200).end();
  })
})





module.exports = api_router;