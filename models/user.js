module.exports = function(sequelize, DataTypes) {  
    let User = sequelize.define("User", {
        user_name: {
            //giving the user a username
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
  
    return User;
  };
  