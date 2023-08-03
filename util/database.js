const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('node-complete', 'root', 'ViperDodge2k9', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
