const db = require("./db");
const Sequelize = require("sequelize");

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notNull: true,
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://i.imgur.com/o12DNEi.jpg" 
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

module.exports = Student;