const router = require('express').Router();
const User = require('../models').user;
const Post = require('../models').post;
const Comment = require('../models').comment;

//Create GET and POST route to retrieve and create comments
//Create GET route to retrieve a specific post's comments
//Create GET route to retrieve a specific user's comments

const getAllComments = (req, res) => {
  Comment.findAll()
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}

const createComment = (req, res) => {
  Comment.create(req.body)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}

const getUserComments = (req, res) => {
  User.findById(req.params.userId)
  .then((user) => {
    return user.getComments()
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}

const getPostComments = (req, res) => {
  Post.findById(req.params.postId)
  .then((post) => {
    return post.getComments()
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}


router.route('/')
  .get(getAllComments)
  .post(createComment)

router.route('/user/:userId')
  .get(getUserComments)
  .get(getPostComments)

module.exports = router;
