module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
        burger_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    },{
        timestamps: false
    });
    return burger;
};