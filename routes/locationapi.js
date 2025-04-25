const express = require('express');
const router = express.Router();
const locationController = require('../controller/locationAction');  // Import the controller for user-related actions

// CRUD routes for users
router.get('/', locationController.get);  // Get all users
// router.get('/', (req, res) => {
//     res.send('Users routes');
// });
router.get('/getlocation/:id', locationController.getlocation);  // Get user by ID
router.post('/createLocation/', locationController.createLocation);  // Create a new user
router.delete('/deleteLocation/:id', locationController.deleteLocation);  // Delete a user by ID
// router.put('/:id', locationController.updateUser);  // Update a user by ID
// router.patch('/:id', locationController.editUser);  // Edit a user by ID





module.exports = router;
