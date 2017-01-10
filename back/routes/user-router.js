const router = require('express').Router();
const User = require('../models').user;

const getOwnData = (req, res) => {
  User.findById(req.session.id)
  .then((user) => {
    res.send(user);
  })
  .catch((err) => {
    console.log('Error:', err)
    res.sendStatus(500)
  })
}

const getUsers = (req, res) => {
  User.findAll()
  .then((users) => {
    res.send(users);
  })
  .catch((err) => {
    console.log('Error:', err)
    res.sendStatus(500)
  })
}

const createUser = (req, res) => {
  User.create(req.body)
  .then((user) => {
    res.send(user);
  })
  .catch((err) => {
    console.log('Error:', err)
    res.sendStatus(500)
  })
}

const getUserById = (req, res) => {
  User.findById(req.params.id)
  .then((user) => {
    res.send(user);
  })
  .catch((err) => {
    console.log('Error:', err)
    res.sendStatus(500)
  })
}

router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:id')
  .get(getUserById)

module.exports = router;
