module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
        user_name: {
            //giving the user a username
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
    // Linking user and post together 
    // on delete User and associated recipe will be deleted
    User.associate = function (models) {
        User.hasMany(models.Post, {
            onDelete: "CASCADE"
        })
    }

    return User;
};
