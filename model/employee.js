const mongoose = require('mongoose');

// Define the main User schema
const employeeSchema = new mongoose.Schema({
  id: { type: Number},
  empid :Number,
  name: { type: String},
  employeename: { type: String},
  email: { type: String},
  contact: {type: Number}
});

// Create and export the User model
const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;
