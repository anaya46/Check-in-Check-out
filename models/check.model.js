const { db, DataTypes } = require("../utils/database.util")

const Check = db.define("check", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true,

    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "working"
    }

})
module.exports = { Check }