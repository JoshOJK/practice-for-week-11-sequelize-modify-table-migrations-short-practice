'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class add - unique - constraint - to - color - names extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  add - unique - constraint - to - color - names.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'add-unique-constraint-to-color-names',
  });
  return add - unique - constraint - to - color - names;
};