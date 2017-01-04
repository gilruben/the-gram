"use strict";

module.exports = function(sequelize, DataTypes) {
  var Follow = sequelize.define('follow', {
    follower: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    following: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Follow;
};
