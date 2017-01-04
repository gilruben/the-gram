"use strict";

module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define('like', {}, {
    classMethods: {
      associate: function(models) {

        Like.belongsTo(models.user, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })

        Like.belongsTo(models.post, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })

      }
    }
  });
  return Like;
};
