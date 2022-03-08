var express = require('express');
var router = express.Router();

// Import user controller
const userController = require('../controllers/user.controller');

// Get All users     GET
router.get('/', userController.getAllUsers);

// Create a user     POST
router.post('/', userController.createUser);

// Get a user        GET


// Update a user     PUT

module.exports = router;