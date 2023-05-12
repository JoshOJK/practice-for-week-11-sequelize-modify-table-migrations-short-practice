'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rename - games - numPlayers - and - remove - estPlayTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rename - games - numPlayers - and - remove - estPlayTime.init({
    numPlayers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rename-games-numPlayers-and-remove-estPlayTime',
  });
  return rename - games - numPlayers - and - remove - estPlayTime;
};