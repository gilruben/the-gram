const router = require('express').Router();

router.use('/users', require('./user-router'));
router.use('/posts', require('./post-router'));
// router.use('/likes', require('./like-router'));
router.use('/comment', require('./comment-router'));
// router.use('/follow', require('./follow-router'));


module.exports = router;
