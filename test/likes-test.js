var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server');
var User = require('../back/models').user;

describe('Demo test', () => {
  var likes = [
    {userId: 1, postId: 1},
    {userId: 2, postId: 2},
    {userId: 3, postId: 3},
  ];

  var newLike = [{userId:2 , postId:1}];

before(() => {
  return Like.sync({force: true})
  .then(() => Like.bulkCreate(likes))
  .catch((err) => console.log('DB Err!', err));
});

//Create GET and POST route to retrieve and create likes
it(`'/likes' should respond with all likes`, (done) => {
  supertest(server)
    .get('/likes')
    .end((err,res) => {
      expect(res.body.length).equal(3);
      expect(res.body[0].userId).eql(likes[0].userId);
      expect(res.body[1].userId).eql(likes[1].userId);
      expect(res.body[2].userId).eql(likes[2].userId);
      expect(res.body[0].postId).eql(likes[0].postId);
      expect(res.body[1].postId).eql(likes[1].postId);
      expect(res.body[1].postId).eql(likes[2].postId);
    })
  });

  it(`'/likes' should respond with created likes`, (done) => {
    supertest(server)
      .post('/likes')
      .send(newLike)
      .end((err,res) => {
        expect(res.body.length).equal(1);
        expect(res.body.userId).eql(newLikes.userId);
        expect(res.body.postId).eql(newLikes.postId);
      })
    });

//Create GET route to retrieve a specific user's likes
    it(`'/likes/user/2' should respond with a specific user like`, (done) => {
      supertest(server)
        .get('/likes/user/2')
        .end((err,res) => {
          expect(res.body[0].userId).eql(likes[1].userId);
      })
    });

//Create GET route to retrieve a specific post's likes
    it(`'/likes/post/3' should respond with a specific post like`, (done) => {
      supertest(server)
        .get('/likes/post/3')
        .end((err,res) => {
          expect(res.body[0].postId).eql(likes[2].postId);
      })
    });
});
