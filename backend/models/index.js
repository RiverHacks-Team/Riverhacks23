const Sequelize = require("sequelize");

const config = require('../configs')
const sequelize = new Sequelize(config.MARIADB.DATABASE, config.MARIADB.USER, config.MARIADB.PASSWORD, {
  host: config.MARIADB.HOST,
  port: config.MARIADB.PORT,
  dialect: config.MARIADB.DIALECT,
  logging: config.DEV,

  pool: {
    max: 5,     
    min: 0,     
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize.sync({force: config.DEV});

db.userPub = require('./userPub')(sequelize, Sequelize);
db.userAuth = require('./userAuth')(sequelize, Sequelize);
db.tasks = require('./Task')(sequelize, Sequelize);

// Users authentication
db.userPub.hasOne(db.userAuth);

// Users owning tasks
db.userPub.hasMany(db.tasks);
db.tasks.belongsTo(db.userPub);

module.exports = db;