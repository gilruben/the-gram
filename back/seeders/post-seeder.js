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
        img_path: 'https://s-media-cache-ak0.pinimg.com/564x/f4/26/00/f42600bcd61f4d5a91f2388e8f9b75c5.jpg',
        caption: 'spaghetti night is LIT',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },

      {
        img_path: 'https://s-media-cache-ak0.pinimg.com/736x/a8/84/18/a88418881b48f911085cb2151d67cc9d.jpg',
        caption: 'bite the bullet',
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
