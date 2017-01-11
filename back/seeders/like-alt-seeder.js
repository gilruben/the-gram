//Alternative seeder for the like table.
//like-seeder.js currently has an issue

var Like = require('../models').like;

var likes = [
  {userId: 1, postId: 1},
  {userId: 2, postId: 2},
  {userId: 3, postId: 3},
  {userId: 2, postId: 1}
];

Like.sync({force: true})
.then(() => Like.bulkCreate(likes))
.catch((err) => console.log('DB Err!', err));
