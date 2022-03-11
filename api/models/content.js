'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Content extends Model { }

  Content.init({
    title: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    },
    media: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'content'
  });

  Content.associate = (models) => {
    // associations can be defined here
    
    models.Content.belongsToMany(models.Actor, {through:'CastandContent'});

  };

  return Content;
};