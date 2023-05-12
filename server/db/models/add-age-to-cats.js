'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class add - age - to - cats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  add - age - to - cats.init({
    age: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'add-age-to-cats',
  });
  return add - age - to - cats;
};