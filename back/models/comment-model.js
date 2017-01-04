'user strict';

module.exports = function(sequelize, DataTypes){
  const Comment = sequelize.define("Comment", {
    comment: DataTypes.STRING
  })
  return Comment;
};
