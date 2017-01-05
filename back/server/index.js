const express = require('express');
const app = express();
const path = require('path');
const applyExpressMiddleware = require('./middleware');
const db = require('../models');
//const routes = require('../routes');

applyExpressMiddleware(app);

db.sequelize.sync(() => {
	//API routes
	//app.use('/api/users', routes.user);
	//app.use('/api/posts', routes.post);
	//app.use('/api/comments', routes.comment);
	//app.use('/api/likes', routes.like);
	//app.use('/api/follows', routes.follow);

	//return our react app for all non-API routes
	app.get('/*', (req, res) => {
	  res.sendFile(path.join(__dirname, '../../', 'front/index.html'));
	});
})

module.exports = app;
