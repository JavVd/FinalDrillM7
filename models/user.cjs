'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.associate = function(models) {
        User.belongsToMany(models.Bootcamp, {
          through: 'UserBootcamp', // Tabla intermedia
          foreignKey: 'UserId',
          otherKey: 'BootcampId'
        });
      };
      
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true
    }
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true
  });
  return User;
};