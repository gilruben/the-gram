const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = multer({dest: path.join(__dirname,'../images')});
const router = require('express').Router();
const User = require('../models').user;
const Post = require('../models').post;

const getAllPosts = (req, res) => {
	Post.findAll({
		order: [['createdAt', 'DESC']],
		include: [{
			model: User,
			attributes: ['username']
		}]
	})
	.then((post) => {
		res.send(post)
	})
	.catch((err) => {
		console.log("ERROR GETTING ALL POSTS:", err)
		res.sendStatus(500)
	})
}

const getAllUserPosts = (req, res) => {
	Post.findAll({
		where: {userId: req.session.userId},
		order: [['createdAt', 'DESC']],
		include: [{
			model: User,
			attributes: ['username']
		}]
	})
	.then((post) => {
		res.send(post)
	})
	.catch((err) => {
		console.log("ERROR GETTING ALL POSTS:", err)
		res.sendStatus(500)
	})
}

const createPost = (req, res) => {
	//function that returns a promise with the img sent through the post request
	const renameImg = () => {
		return new Promise((res, rej) => {
		  let fileExists = req.files[0] ? true : false;

		  if(fileExists) {
	      res(req.files[0]);
	    } else {
	      rej('IMAGE WAS NOT SUPPLIED');
	    }
	  })
  }

	//This chain of thens first adds the appropriate extension to the image file
	//sent through the post request. It then creates a post with the path to
	//access the image in the browser, and with the caption given in the post
	//request
	renameImg()
	.then((file) => {
		let extension = '.'+ file.mimetype.split('/')[1];
		let oldPath = file.destination + '/' + file.filename;
		let newPath = file.destination + '/' + file.filename + extension;

		let imgPath  = '/image' + '/' + file.filename + extension;

		fs.rename(oldPath, newPath);

		return imgPath;
	})
	.then((imgPath) => {
		let userId = req.session.userId;
		let {caption} = req.body

		return Post.create({img_path: imgPath, caption: caption, userId: userId})
	})
	.then((data) => {
		console.log("SUCCESS! posted new photo")
		res.send(data)
	})
	.catch( (err) => {
		console.log("ERROR POSTING A NEW PHOTO:", err)
		res.sendStatus(500)
	})

}

//Gets a users posts
const getUserPosts = (req, res) => {
	User.findById(req.params.userId, {
		include: [{
			model: User,
			attributes: ['username']
		}]
	})
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

//Adds multer middleware
router.use(upload.any())

//URL is /api/posts
router.route('/')
	.get(getAllPosts)
	.post(createPost)

router.route('/user')
	.get(getAllUserPosts)

//URL is /api/posts/userId
router.route('/:userId')
	.get(getUserPosts)


module.exports = router;
