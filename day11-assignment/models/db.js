const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/colleges");

module.exports = db;