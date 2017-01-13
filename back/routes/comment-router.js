const router = require('express').Router();
const User = require('../models').user;
const Post = require('../models').post;
const Comment = require('../models').comment;


const getAllComments = (req, res) => {
  Comment.findAll()
  .then((data) => {
    console.log('DATA:', data)
    res.send(data)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
}

const createComment = (req, res) => {
  let newComment = Object.assign({}, req.body, {userId: req.session.userId})
  let commentId;

  Comment.create(newComment)
  .then((data) => {
    commentId = data.id;

    return Comment.findById(commentId,{
      include: {
        model: User,
        attributes: ['username']
      }
    })

  })
  .then((comment) => {
    res.send(comment);
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
    return post.getComments({
      include: {
        model: User,
        attributes: ['username']
      }
    })
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

router.route('/post/:postId')
  .get(getPostComments)

module.exports = router;
