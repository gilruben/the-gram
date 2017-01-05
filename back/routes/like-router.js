const router = require('express').Router();
const Post = require('../models').post;
const Like = require('../models').like;

const getLikes = (req, res) => {
  Likes.findAll()
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log('ERROR, unable to like posts:', err)
    res.sendStatus(500)
  }
}

const createLikes = (req, res) => {
  Likes.create(req.body)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log('ERROR, unable to create a like :', err)
    res.sendStatus(500)
  }
}

const getUserLikes = (req, res) => {
  Likes.findById(req.params.userId)
  .then((user) => {
    return user.getLikes()
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log('ERROR, unable to get user likes', err)
    res.sendStatus(500)
  })
}
//Create GET route to retrieve a specific user's likes
const getPostLikes = (req, res) => {
  Post.findById(req.params.postId)
  .then((post) => {
    return post.getLikes()
  })
  .then((likes) => {
    res.send(likes);
  })
  .catch ((err) => {
    console.log('ERROR, unable to get likes posted:', err)
    res.sendStatus(500)
  })
}

//URL is /api/likes
router.route('/')
  .get(getLikes)
  .post(createLikes)

//URL is /api/likes/userId
router.route('/user/:userId')
  .get(getUserLikes)

//URL is /api/likes/postId
router.route('/post/:postId')
  .get(getPostLikes)

module.exports = router;
