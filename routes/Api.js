const express = require('express');
const router = express.Router();
const userController = require('../controller/UserAction');  // Import the controller for user-related actions

// CRUD routes for users
router.get('/', userController.get);  // Get all users
// router.get('/', (req, res) => {
//     res.send('Users routes');
// });
router.get('/:id', userController.getUser);  // Get user by ID
router.post('/', userController.createUser);  // Create a new user
router.delete('/:id', userController.deleteUser);  // Delete a user by ID
router.put('/:id', userController.updateUser);  // Update a user by ID
router.patch('/:id', userController.editUser);  // Edit a user by ID





module.exports = router;
