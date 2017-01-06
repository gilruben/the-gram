var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server');
var Comment = require('../back/models').comment;

describe('comment-api-test', () => {
  //fake comment data that we'll use for tests
  var comments = [
    {comment: 'This is the first comment', userId: 1, postId: 1},
    {comment: 'This is the second comment', userId: 2, postId: 2},
    {comment: 'This is the third comment', userId: 3, postId: 2}
  ];

  var newComment = {comment: 'This is a new comment', userId: 3, postId: 3}

  before(() => {
    return Comment.sync({force: true})
    .then(() => Comment.bulkCreate(comments))
    .catch((err) => console.log('DB Err!', err));
  });

  //example of how to do a test to get all users route
  it(`'/api/comments' should respond with all comments`, (done) => {
    supertest(server)
      .get('/api/comments')
      .end((err, res) => {
        expect(res.body.length).equal(3);
        expect(res.body[0].comment).equal(comments[0].comment);
        expect(res.body[1].comment).equal(comments[1].comment);
        expect(res.body[2].comment).equal(comments[2].comment);
        done();
      })
  });

  it(`'/api/comments' should respond with created comment`, (done) => {
    supertest(server)
      .post('/api/comments')
      .send(newComment)
      .end((err, res) => {
        expect(res.body.comment).equal(newComment.comment);
        expect(res.body.postId).equal(newComment.postId);
        expect(res.body.userId).equal(newComment.userId);
        done();
      })
  });

  it(`'/api/comments/post/:postId' should respond with comments on specific post`, (done) => {
    supertest(server)
    .get('/api/comments/post/2')
    .end((err, res) => {
      expect(res.body[0].comment).equal(comments[1].comment);
      expect(res.body[1].comment).equal(comments[2].comment);
      done();
    })
  });

  it(`'/api/comments/post' should respond with comments by specific user`, (done) => {
    supertest(server)
    .get('/api/comments/user/2')
    .end((err, res) => {
      expect(res.body[0].comment).equal(comments[1].comment);
      done();
    })
  });
});
