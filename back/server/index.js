const express = require('express');
const app = express();
const path = require('path');
const applyExpressMiddleware = require('./middleware');
const db = require('../models');
const routes = require('../routes');

applyExpressMiddleware(app);


//API routes
app.use('/api', routes)

//auth routes
app.use('/auth', require('../routes/auth-router'));

//return images from backend storage
app.get('/image/:img', (req, res) => {
	let userId = req.params.userId;
	let img = req.params.img;

  res.sendFile(path.join(__dirname, '../', `images/${img}`));
})

//return our react app for all non-API routes
app.get('/*', (req, res) => {
	console.log('SESSION:', req.session);
	res.sendFile(path.join(__dirname, '../../', 'front/index.html'));
});

db.sequelize.sync()

module.exports = app;
