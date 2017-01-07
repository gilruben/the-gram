const router = require('express').Router();
const User =  require('../models').user;

const login = (req, res) => {
  User.findOne({where: req.body})
  .then((user) => {
    if(user){
      req.session.username = user.username;
      req.session.save;

      res.send({id: user.id, username: user.username, email: user.email, bio: user.bio});
    } else {
      res.sendStatus(401);
    }
  })
}

const logout = (req, res) => {
  req.session.destroy()
  res.sendStatus(200);
}

const verify = (req, res) => {
  if(req.session.username){
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
}


router.route('/login')
 .post(login)

router.route('/logout')
  .post(logout)

router.route('/verify')
  .post(verfiy)

module.exports = router;
