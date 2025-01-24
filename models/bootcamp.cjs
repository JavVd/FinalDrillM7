'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bootcamp.associate = function(models) {
        Bootcamp.belongsToMany(models.User, {
          through: 'UserBootcamp', // Tabla intermedia
          foreignKey: 'BootcampId',
          otherKey: 'UserId'
        });
      };
      
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