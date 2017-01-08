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
  let username = req.session.username;

  if(username){
    console.log(`${username} is AUTHORIZED`);
    res.sendStatus(200);
  } else {
    console.log('User is NOT AUTHORIZED');
    res.sendStatus(401);
  }
}


router.route('/login')
 .post(login)

router.route('/logout')
  .post(logout)

router.route('/verify')
  .get(verify)

module.exports = router;
