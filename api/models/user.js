'use strict';
const { Model, UUIDV4 } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model { }

  User.init({
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      unique: true,
      type: DataTypes.STRING
    },
    username: {
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    }
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here
    models.User.belongsToMany(models.Content, { through: 'TheirList' });

  };

  return User;
};