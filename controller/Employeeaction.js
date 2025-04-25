const employee = require('../model/employee');  // Import the User model
// const mongoose = require("mongoose")

// Get all users
exports.get = async (req, res) => {
    try {
        const emp = await employee.find();  // Corrected: Use the User model directly
        // console.log('Users fetched:', user);  // Log the users from DB
        res.json(emp);
    } catch (err) {
        console.log('Error fetching users:', err);
        res.status(500).send(`Error fetching users`);  // Improved error handling
    }
};

// Get user by ID
exports.getEmp = async (req, res) => {
    const { id } = req.params;
    try {
        const emp = await employee.findById(id);  // Find user by ID in DB
        if (emp) {
            res.json(emp);
        } else {
            res.status(404).send('emp not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
// Create a new user
exports.createEmp= async (req, res) => {
    const newEmployee = req.body;
    try {
        const emp = new employee(newEmployee);
        await emp.save();
        res.status(201).json(emp);  // Return created user
        console.log(emp)
    } catch (err) {
        res.status(500).send(err);
    }
};
// exports.updateEmp = async (req, res) => {
//     const { id } = req.params;
//     const updatedData = req.body;
//     try {
//         const user = await employee.findById(id);
//         if (user) {
//             res.json(user);  // Return updated user
//         } else {
//             res.status(404).send('User not found');
//         }
//     } catch (err) {
//         res.status(500).send(err);
//     }
// };

exports.editEmp = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const emp = await employee.findById(id);
        if (emp) {
            emp.set(updatedData);  // Merge updates
            await emp.save();
            res.json(emp);  // Return updated user
        } else {
            res.status(404).send('emp not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};