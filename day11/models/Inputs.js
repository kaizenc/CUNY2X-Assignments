const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost/cuny_test');
const POPULATE_TABLE = false;

const Inputs = sequelize.define('inputs', {
    input: Sequelize.STRING,
    length: Sequelize.INTEGER
});

Inputs.sync().then(() => {
  if(POPULATE_TABLE){
    Inputs.bulkCreate([
      {
        input: 'Kaizen',
        length: 6
      },
      {
        input: 'Leo',
        length: 3
      }
    ]);
  }  
});

module.exports = Inputs;