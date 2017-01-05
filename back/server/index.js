const express = require('express');
const app = express();
const path = require('path');
const applyExpressMiddleware = require('./middleware');
const db = require('../models');
//const routes = require('../routes');

applyExpressMiddleware(app);

db.sequelize.sync(() => {
	//API routes
	//app.use('/api', routes)

	//return our react app for all non-API routes
	app.get('/*', (req, res) => {
	  res.sendFile(path.join(__dirname, '../../', 'front/index.html'));
	});
})

module.exports = app;
