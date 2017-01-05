const router = require('express').Router();
const User = require('../models').user;
const Post = require('../models').post;

//Create GET and POST route to retrieve and create posts
//Create GET route to retrieve a specific user's posts

const getAllPosts = (req, res) => {
	Post.findAll()
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		console.log("ERROR GETTING ALL POSTS:", err)
		res.sendStatus(500)
	})
}

const createPost = (req, res) => {
	// Post.create({
	// 		img_path: req.body.img_path,
	// 		caption: req.body.caption,
	// 		userId: req.body.userId
	// 	}) 
	//The front-end form is already like that ^ thus the data is all under req.body
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


//current URL is /api/posts
router.route('/')
	.get(getAllPosts)
	.post(createPost)

//URL is /api/posts/userId
router.route('/:userId')
	.get(getUserPosts)


module.exports = router;
