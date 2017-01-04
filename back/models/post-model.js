'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('post', {
    img_path: DataTypes.STRING,
    caption: DataTypes.STRING
  
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Post.belongsTo(models.user, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),  

          Post.hasMany(models.comment, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),

          Post.hasMany(models.like, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })

      }
    }
  });
  return Post;
};