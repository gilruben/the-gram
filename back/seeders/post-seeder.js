module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('posts', [
      {
        img_path: 'https://i0.wp.com/negativespace.co/wp-content/uploads/2015/10/0093.jpg',
        caption: 'looks like cake',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4
      },
      {
        img_path: 'http://www.wallpaperscharlie.com/wp-content/uploads/2016/06/Hot-Air-Balloons-HD-Pictures-9.jpg',
        caption: 'Im on a balloon!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        img_path: 'http://www.gratisography.com/pictures/353_1.jpg',
        caption: 'it is LIT',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        img_path: 'http://www.gratisography.com/pictures/368_1.jpg',
        caption: 'earth is dirt',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      }
    ])
  }
}
