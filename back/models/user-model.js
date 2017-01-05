"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    bio: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.post);
        User.hasMany(models.like);
        User.hasMany(models.comment);

      }
    }
  });

  return User;
};
