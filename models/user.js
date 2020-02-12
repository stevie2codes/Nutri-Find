module.exports = function(sequelize, DataTypes) {
    // var User = sequelize.define("User", {
    //   // Giving the User model a name of type STRING
    //   name: DataTypes.STRING
    // });
  
    let User = sequelize.define("User", {
        user_name: {
            //giving the user a username
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
  
    return User;
  };
  