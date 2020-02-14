const RecipeName = require('../models/create');
const db = require("../models");

module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    // Giving the RECIPES model a name of type STRING
    name: DataTypes.STRING
  });
  Recipes.associate = function(models) {
    // Associating RECIPES with Posts
    // When a RECIPE is deleted, also delete any associated Posts
    Recipes.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Recipes;
};
