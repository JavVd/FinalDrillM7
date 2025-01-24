'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    static associate(models) {
      Bootcamp.belongsToMany(models.User, {
        through: 'UserBootcamps', // Tabla intermedia
        foreignKey: 'BootcampId',
        otherKey: 'UserId'
      });
    }
  }
  Bootcamp.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Bootcamp',
    paranoid: true
  });
  return Bootcamp;
};