module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('posts', [
      {
        img_path: 'https://s-media-cache-ak0.pinimg.com/originals/a6/e2/47/a6e247e185553572ba23efe1be5a3aa3.jpg',
        caption: 'We fly high. No lie. We ballin. BALLIN!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        img_path: 'https://s-media-cache-ak0.pinimg.com/564x/60/03/f4/6003f420d94a3bb2530a602ebfef7372.jpg',
        caption: 'the spiders in my house made this just for me',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3
      },
      {
        img_path: 'http://www.gratisography.com/pictures/332_1.jpg',
        caption: 'This friday night... it is getting LIT',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
      {
        img_path: 'http://www.gratisography.com/pictures/353_1.jpg',
        caption: 'it is so LIT',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        img_path: 'https://s-media-cache-ak0.pinimg.com/564x/23/ff/47/23ff4794449f41d7d2545ea4739345bc.jpg',
        caption: 'I like coffee/ I like cake/ do not give me/ coffee cake',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4
      },
      {
        img_path: 'https://s-media-cache-ak0.pinimg.com/564x/f4/26/00/f42600bcd61f4d5a91f2388e8f9b75c5.jpg',
        caption: 'spaghetti night!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        img_path: 'http://www.gratisography.com/pictures/368_1.jpg',
        caption: 'OM NOM NOM NOM',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
      {
        img_path: 'https://s-media-cache-ak0.pinimg.com/564x/ab/e0/82/abe082506289f4e10d784f6fa4b65edf.jpg',
        caption: 'A piece of cake and a much needed drink...',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4
      },
      {
        img_path: 'http://www.colorlisa.com/pictures/149_1.jpg',
        caption: 'Requiem for a dream, anyone?',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
      {
        img_path: 'https://s-media-cache-ak0.pinimg.com/564x/c6/20/10/c62010683cfa3eba59be21d66809d700.jpg',
        caption: 'look at my peacock',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3
      },
      {
        img_path: 'https://i0.wp.com/negativespace.co/wp-content/uploads/2015/10/0093.jpg',
        caption: 'All I see is cake frosting',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4
      },
    ])
  }
}
