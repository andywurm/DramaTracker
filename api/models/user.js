'use strict';
const { Model, UUIDV4 } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    firstName:{
        type: DataTypes.STRING
    },
    lastName:{
       type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    completed:{
        type: DataTypes.STRING
    },
    watching:{
        type: DataTypes.STRING
    },
    planToWatch:{
        type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here
  };

  return User;
};