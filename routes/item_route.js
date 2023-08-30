const express =require('express');
const controller = require('../contoller/item_controller.js');

const router = express.Router();

router.get('/', controller.getAllItems);

module.exports = router;

