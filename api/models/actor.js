'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Actor extends Model { }

  Actor.init({
    name: {
      type: DataTypes.STRING
    },
    japanese: {
      type: DataTypes.STRING
    },
    DOB: {
      type: DataTypes.STRING
    },
    height: {
      type: DataTypes.STRING
    },
    headshot: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'actor'
  });

  Actor.associate = (models) => {
    // associations can be defined here

    models.Actor.belongsToMany(models.Content, {through:'CastandContent'});

  };

  return Actor;
};