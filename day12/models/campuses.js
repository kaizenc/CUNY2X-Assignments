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
    defaultValue: "https://thumbs.dreamstime.com/z/college-students-sitting-talking-lawn-5949783.jpg" 
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