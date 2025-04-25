const express = require('express');
const router = express.Router();
const universityController = require('../controller/universityAction');  // Import the controller for user-related actions

// CRUD routes for users
router.get('/', universityController.get);  // Get all users
// router.get('/', (req, res) => {
//     res.send('Users routes');
// });
router.get('/getUniversity/:id', universityController.getUniversity);  // Get user by ID
router.post('/createuniversity/', universityController.createUniversity);  // Create a new user
router.delete('/deleteUniversity/:id', universityController.deleteUniversity);  // Delete a user by ID
// router.put('/:id', locationController.updateUser);  // Update a user by ID
// router.patch('/:id', locationController.editUser);  // Edit a user by ID





module.exports = router;
