module.exports = function(sequelize, DataTypes) {
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
    return Post;
  };