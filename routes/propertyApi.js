const express = require('express');
const router = express.Router();
const propertyController = require('../controller/propertyAction');  // Import the controller for user-related actions

// CRUD routes for users
router.get('/', propertyController.get);  // Get all users
// router.get('/', (req, res) => {
//     res.send('Users routes');
// });
router.get('/getProperty/:id', propertyController.getProperty);  // Get user by ID
router.post('/createProperty/', propertyController.createProperty);  // Create a new user
router.delete('/deleteProperty/:id', propertyController.deleteProperty);  // Delete a user by ID
// router.put('/:id', locationController.updateUser);  // Update a user by ID
// router.patch('/:id', locationController.editUser);  // Edit a user by ID





module.exports = router;
