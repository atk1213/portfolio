const router = require('express').Router();
const controller = require('./controller.js');

// routes students name
router
  .route('/projects')
  .get(controller.projects.get)

module.exports = router