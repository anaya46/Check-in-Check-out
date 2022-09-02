const { Sequelize, DataTypes } = require("sequelize")


//Establish db connection
const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "Danna00",
    port: 5432,
    database: "week1",
    logging: false,
});

module.exports = { db, DataTypes }