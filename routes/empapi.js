const express = require('express');
const router = express.Router();
const empController = require('../controller/Employeeaction');  // Import the controller for user-related actions






// CRUD routes for employee
router.get('/employee', empController.get);  // Get all users
// router.get('/', (req, res) => {
//     res.send('Users routes');
// });
router.get('/employee/:id', empController.getEmp);  // Get user by ID
router.post('/employee', empController.createEmp);  // Create a new user
// router.delete('/:id', userController.deleteUser);  // Delete a user by ID
// router.put('/employee/:id', empController.update);  // Update a user by ID
router.patch('/employee/:id', empController.editEmp);  // Edit a user by ID

module.exports = router;
