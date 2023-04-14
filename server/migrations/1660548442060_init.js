'use strict';

const table = 'init';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { STRING, INTEGER, BOOLEAN, DATE } = Sequelize.DataTypes;

    return Promise.all([
      queryInterface.createTable(
        table,
        {
          id: { type: INTEGER, autoIncrement: true, primaryKey: true },
          val: { type: STRING, allowNull: false },
          createdAt: { type: DATE, defaultValue: Sequelize.fn('NOW') },
        },
        { timestamps: true, createdAt: true, updatedAt: false }
      ),
    ]);
  },

  down: (queryInterface) => Promise.all([queryInterface.dropTable(table)]),
};