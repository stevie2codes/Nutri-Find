
module.exports = function (sequelize, DataTypes) {
    let Item = sequelize.define("Item", {
        recipe_name: {
            type: DataTypes.STRING,
        },
        ingredient:{
            type:DataTypes.STRING
        },
        creator:{
            type: DataTypes.STRING
        }
    });
    return Item;
};