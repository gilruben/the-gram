const express = require('express');
const app = express();
const path = require('path');
const applyExpressMiddleware = require('./middleware');
const routes = require('./routes');
const db = require('../models')

applyExpressMiddleware(app);
app.use('/api', routes);

db.sequelize.sync(() => {
	
	//return our react app for all non-API routes
	app.get('/*', (req, res) => {
	  res.sendFile(path.join(__dirname, '../../', 'front/index.html'));
	});
})

module.exports = app;
