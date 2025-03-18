'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { CONFIG } = require('../config/config');
const db = {};

const sequelize=new Sequelize(CONFIG.DB_NAME,CONFIG.DB_USERNAME,CONFIG.DB_PASS,{
  host:CONFIG.HOST,
  dialect:'mysql',
  port:CONFIG.DB_PORT,
  define:{
    timestamps:false,
  }
})
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' 
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
