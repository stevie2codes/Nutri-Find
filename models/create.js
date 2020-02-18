module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    directions: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Create Recipe"
    }
  });
  //Post belongs to User and a newRecipe 
  ///////IVE CHANGED ALLOW NULL TO TO TRUE UNTIL WE GET THIS HOOKED UP
  ////IF IT IS FALSE THEN THE FORIEGN KEY CONSTRAINT WONT LET US POST A NEW RECIPE
  Post.associate = function (models) {

    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  }

  return Post;
};