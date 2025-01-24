'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserBootcamp.init({
    UserId: DataTypes.INTEGER,
    BootcampId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserBootcamp',
    paranoid: true
  });
  return UserBootcamp;
};