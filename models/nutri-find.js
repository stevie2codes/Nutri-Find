
module.exports = function (sequelize, DataTypes) {
    let Item = sequelize.define("Item", {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 60]
            }
        }
    });
    return Item;
};