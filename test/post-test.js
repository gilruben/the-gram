var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server');
var Post = require('../back/models').post;

describe('post-api', () => {
  //fake user data that we'll use for tests
  var posts = [
    {img_path: 'https://unsplash.com/?photo=NDuPLKYRXQU', caption: 'looks like cake', userId: 4},
    {img_path: 'https://unsplash.com/?photo=w7oxd0tzWWs', caption: 'Im on a balloon!', userId: 1},
    {img_path: 'https://unsplash.com/new?photo=btixXP1dw28', caption: 'it is LIT', userId: 1},
  ];

  before(() => {
    return Post.sync({force: true})
    .then(() => Post.bulkCreate(posts))
    .catch((err) => console.log('DB Err!', err));
  });

  //testing GET request to get all posts
  it(`'/api/posts' should respond with all posts`, (done) => {
    supertest(server)
      .get('/api/posts')
      .end((err, res) => {
        expect(res.body.length).to.eql(3);
        expect(res.body[0].caption).to.eql(posts[0].caption);
        expect(res.body[0].userId).to.eql(posts[0].userId);
        //done is required in order to execute the test
        done();
      })
  });

  //GET a specific users posts
  it(`'/api/posts/:userId' should respond with all of Carmars posts`, (done) => {
    supertest(server)
      .get('/api/posts/1')
      .end((err, res) => {
        expect(res.body.length).equal(2);
        expect(res.body[0].caption).equal(posts[1].caption);
        done();
      })
  });

  //POST a photo!
  it(`'/api/posts' should post a new photo`, (done) => {
    let newPost = {img_path: 'https://unsplash.com/new?photo=IdjxBF_StBk', caption: 'earth is dirt', userId: 2}
    supertest(server)
      .post('/api/posts')
      .send(newPost)
      .end((err, res) => {
        expect(res.body.caption).equal(newPost.caption);
        expect(res.body.userId).equal(newPost.userId);
        done();
      })
  });
});
