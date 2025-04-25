const mongoose = require('mongoose');
const universityschema = new mongoose.Schema(
    
    {
        id: { type: Number},
        universityName: { type: String},
          imageUrl: {
    type: String,
    required: false
  },
      }
   
);
// Create and export the User model
const universities = mongoose.model('university', universityschema);

module.exports = universities;