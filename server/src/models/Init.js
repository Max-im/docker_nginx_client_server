const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Init = sequelize.define('init', {
  val: DataTypes.STRING
});

module.exports = {Init}
