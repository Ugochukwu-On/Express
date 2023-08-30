const express = require('express');
const controller = require('./user_controller.js') ;
const middleware = require('./user_middleware.js') ;

const router = express.Router();

router.post ('/', middleware.validateData, controller.router);

module.exports = router;