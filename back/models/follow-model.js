"use strict";

module.exports = function(sequelize, DataTypes) {
  var Follow = sequelize.define('follow', {
    follower: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    following: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
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
