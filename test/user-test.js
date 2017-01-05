var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server');
var User = require('../back/models').user;

describe('User API tests', () => {
  var newUser = {username: 'rgil', email: 'rgil@gmail.com', password: 'password', bio: 'Lover of cake'}

  //fake user data that we'll use for tests
  var users = [
    {username: 'cmart', email: 'cmart@gmail.com', password: 'password', bio: 'I\'m LIT!!!' },
    {username: 'lkang', email: 'lkang@gmail.com', password: 'password', bio: 'YASSSS, QUEEN, SLAAYY'},
    {username: 'dsterling', email: 'dsterling@gmail.com', password: 'password', bio: 'I\'m THAT girl'}
  ];

  
  before(() => {
    return User.sync({force: true})
    .then(() => User.bulkCreate(users))
    .catch((err) => console.log('DB Err!', err));
  });

  //Test to get all users route
  xit(`'/api/users' should respond with all users`, (done) => {
    supertest(server)
      .get('/api/users')
      .end((err, res) => {
        expect(res.body.length).equal(3);
        expect(res.body[0].username).equal(users[0].username);
        expect(res.body[1].username).equal(users[1].username);
        expect(res.body[2].username).equal(users[2].username);
        done();
      })
  });

  //Test to create a new user
  xit(`'/api/users' should respond the user created`, (done) => {
    supertest(server)
      .post('/api/users')
      .send(newUser)
      .end((err, res) => {
        expect(res.body.username).equal(newUser.username);
        expect(res.body.email).equal(newUser.email);
        expect(res.body.password).equal(newUser.password);
        expect(res.body.bio).equal(newUser.bio);

        done();
      })
  });
});
