'user strict';

module.exports = function(sequelize, DataTypes){
  const Comment = sequelize.define("comment", {
    comment: DataTypes.STRING
},
  {
    classMethods: {
      associate: function(models){
        Comment.belongsTo(models.user, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Comment.belongsTo(models.post, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  })
    return Comment;
  };
