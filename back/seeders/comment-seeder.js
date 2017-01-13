module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('comments', [
      {
        comment: 'dat from Lord of the Rings?!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        postId: 9
      },
      {
        comment: 'how much for a gram? I mean- INSTA gram...',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        postId: 1
      },
      {
        comment: 'how HIGH did you get?',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        postId: 1
      },
      {
        comment: 'stop monkeying around',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        postId: 2
      }
    ])
  }
}
