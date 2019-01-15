const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost/cuny_test');

const Hat = sequelize.define('hat', {
  name: Sequelize.STRING,
  material: Sequelize.STRING,
  height: Sequelize.INTEGER,
  brim: Sequelize.BOOLEAN
});

const Person = sequelize.define('person', {
  name: Sequelize.STRING,
  date: Sequelize.DATE
});

Person.hasMany(Hat);
Hat.belongsTo(Person);

sequelize.sync()
.then(() => {
  return Person.create({
    name: 'Jane Smith',
    date: Date.now()
  })
})

