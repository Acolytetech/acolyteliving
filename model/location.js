const mongoose = require('mongoose');
const locationschema = new mongoose.Schema(
    
    {
        id: { type: Number},
        locationName: { type: String},
        imageUrl: {
            type: String,
            required: false
          },
      }
   
);
// Create and export the User model
const locations = mongoose.model('location', locationschema);

module.exports = locations;