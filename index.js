const express = require('express');
require('dotenv').config(); // Load environment variables
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');

const userRoutes = require('./routes/Api');  // Import routes
const empRoutes = require('./routes/empapi');  // Import routes
const locationRoutes = require('./routes/locationapi');  // Import routes
const universityRoutes = require('./routes/universityApi');  // Import routes
const propertyRoutes = require('./routes/propertyApi');  // Import routes

// MongoDB connection
async function main() {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log('Database connected');

      
    } catch (err) {
        console.log('Error connecting to the database:', err);
    }
 
}

main();

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Middleware
app.use(express.json());  // To parse incoming JSON requests

// Use userRoutes for all routes related to users
app.use('/users' , userRoutes); // Mount routes under '/users'
app.use('/employee' , empRoutes); // Mount routes under '/users'
app.use('/location' , locationRoutes); // Mount routes under '/users'
app.use('/university' , universityRoutes); // Mount routes under '/users'
app.use('/property', propertyRoutes);
// Start the server

 