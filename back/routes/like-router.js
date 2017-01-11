const router = require('express').Router();
const Post = require('../models').post;
const Like = require('../models').like;
const User = require('../models').user;

const getLikes = (req, res) => {
  Like.findAll()
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log('ERROR, UNABLE TO GET LIKES:', err)
    res.sendStatus(500)
  })
}

const createLikes = (req, res) => {
  Like.create(req.body)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log('ERROR, UNABLE TO CREATE LIKE:', err)
    res.sendStatus(500)
  })
}

const getUserLikes = (req, res) => {
  User.findById(req.params.userId)
  .then((user) => {
    return user.getLikes()
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log('ERROR, UNABLE TO GET USER\'S LIKES:', err)
    res.sendStatus(500)
  })
}

//Create GET route to retrieve a specific post's likes
const getPostLikes = (req, res) => {
  Post.findById(req.params.postId)
  .then((post) => {
    return post.getLikes()
  })
  .then((likes) => {
    res.send(likes);
  })
  .catch ((err) => {
    console.log('ERROR, UNABLE T0 GET POST\'S LIKES:', err)
    res.sendStatus(500)
  })
}

//Returns an object with the number of likes for a specific post and whether or
//or not the logged in user has already liked that post.
const getLikesAndLikeStatus = (req, res) => {
  let userId = req.session.userId;
  let postId = req.params.postId;
  let targetPost;       //will hold the instance of the post being targeted
  let likesLen;         //will hold the number of likes of a specific post

  Post.findById(req.params.postId)
  .then((post) => {
    targetPost = post;
    return post.getLikes();
  })
  .then((likes) => {
    //likes is an array of likes for a specific post

    //set likesLen to the length of the likes array
    likesLen = likes.length

    //If the post has at least one like, then there is a possibility that the
    //logged in user liked the post. So return an object with the number of
    //likes.
    //
    //Else, if the post has zero likes, then there is no possbility that the
    //logged in user liked the post
    console.log('USERID:', userId)
    if(!userId){
      res.send({count: likesLen, isLiked: null});
    } else if(userId && likesLen){
      return {count: likesLen}
    } else {
      res.send({count: likesLen, isLiked: false});
    }
  })
  .then((info) => {

    //returns a like if the logged in user has liked that specific post
    return targetPost.getLikes({where: {userId: userId}});
  })
  .then((like) => {
    //like will be one of two things. It will either be an array with 1 like
    //object (means the logged in user liked the post) or it will be an empty
    //array (means the logged in user did not like this post)
    //
    //If a like is found then send the data with the isLiked flag set to true,
    //because it means that the logged in user has liked that post.
    //
    //Else if no like is found, it means the logged in user has not liked that post,
    //so set the isLiked flag to true
    if(like.length){
      res.send({count: likesLen, isLiked: true})
    } else {
      res.send({count: likesLen, isLiked: false})
    }
  })
  .catch ((err) => {
    console.log('ERROR, UNABLE T0 GET POST\'S LIKES:', err)
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

//URL is /api/likes/post/:postId/user/:userId
router.route('/post/:postId/user')
  .get(getLikesAndLikeStatus)

module.exports = router;
