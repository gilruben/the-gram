const router = require('express').Router();
const User = require('../models').user;
const Post = require('../models').post;


const getAllPosts = (req, res) => {
	Post.findAll({where: {userId: req.session.userId}})
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		console.log("ERROR GETTING ALL POSTS:", err)
		res.sendStatus(500)
	})
}

const createPost = (req, res) => {
	Post.create(req.body)
	.then( (data) => {
		console.log("SUCCESS! posted new photo")
		res.send(data)
	})
	.catch( (err) => {
		console.log("ERROR POSTING A NEW PHOTO:", err)
		res.sendStatus(500)
	})
}

const getUserPosts = (req, res) => {
	User.findById(req.params.userId)
	.then((user) => {
		return user.getPosts()
	})
	.then((posts) => {
		res.send(posts);
	})
	.catch( (err) => {
		console.log("ERROR GETTING USERS POSTS:", err)
		res.sendStatus(500)
	})
}


//URL is /api/posts
router.route('/')
	.get(getAllPosts)
	.post(createPost)

//URL is /api/posts/userId
router.route('/:userId')
	.get(getUserPosts)


module.exports = router;
