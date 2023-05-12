'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Colors','name',{
      type:Sequelize.TEXT,
      unique: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Colors','name',{
      type:Sequelize.TEXT
    })
  }
};
