const express = require('express');
const router = express.Router();


// Load each controller
const contentsController = require('./contents.js');
const actorsController = require('./actors.js');
const usersController = require('./users.js');
const appConfigController = require('./appConfig.js');
const { sequelize } = require('../models/index.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/contents', contentsController);
router.use('/actors', actorsController);
router.use('/users', usersController);
router.use('/application-configuration', appConfigController);


module.exports = router;