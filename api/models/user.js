'use strict';
const { Model, UUIDV4 } = require('sequelize');
const bcrypt = require('bcryptjs');


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
    passwordHash: { type: DataTypes.STRING },
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        isLongEnough: (val) => {
          if (val.length < 7) {
            throw new Error("Please choose a longer password");
          }
        }
      }
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
    const User_Content = sequelize.define("User_Content", { listType: { type: DataTypes.STRING } });
    models.User.belongsToMany(models.Content, { through: User_Content });
    models.Content.belongsToMany(models.User, { through: User_Content });

  };

  User.beforeSave((user, options) => {
    if (user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });


  return User;
};