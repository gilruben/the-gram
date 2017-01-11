module.exports = {
  up: function(queryInterface, Sequelize) {
    let pw = 'password';

    return queryInterface.bulkInsert('users', [
      {
        username: 'cmart',
        email: 'cmart@gmail.com',
        password: pw,
        bio: 'I\'m LIT!!!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lkang',
        email: 'lkang@gmail.com',
        password: pw,
        bio: 'YASSSS, QUEEN, SLAAYY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'dsterling',
        email: 'dsterling@gmail.com',
        password: pw,
        bio: 'I\'m THAT girl',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'rgil',
        email: 'rgil@gmail.com',
        password: pw,
        bio: 'Lover of cake',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  }
}
