module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('posts', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        postId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        postId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        postId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        postId: 1
      }
    ])
  }
}
