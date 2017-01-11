module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('comments', [
      {
        comment: 'This is the first comment',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        postId: 1
      },
      {
        comment: 'This is the second comment',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        postId: 2
      },
      {
        comment: 'This is the third comment',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        postId: 2
      },
      {
        comment: 'This is a new comment',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        postId: 3
      }
    ])
  }
}
