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
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.TEXT,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    sex: DataTypes.BOOLEAN,
    roleID: DataTypes.STRING,
    positionID: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};