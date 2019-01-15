const db = require("./db");
const Sequelize = require("sequelize");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://i.imgur.com/o12DNEi.jpg" 
  },
  address: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Campus;