module.exports = {
  up: function(queryInterface, Sequelize) {
    let pw = 'password';

    return queryInterface.bulkInsert('users', [
      {
        username: 'rgil',
        email: 'rgil@gmail.com',
        password: pw,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'cmart',
        email: 'cmart@gmail.com',
        password: pw,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lkang',
        email: 'lkang@gmail.com',
        password: pw,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'dsterling',
        email: 'dsterling@gmail.com',
        password: pw,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  }
}
