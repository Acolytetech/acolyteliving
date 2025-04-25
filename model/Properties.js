const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  features: {
    type: [String], // Array of strings
    default: []
  },
  available: {
    type: Boolean,
    default: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  locationId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'location',
    required: true
  }],
  universityId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'university',
    required: false // If not all properties are near a university
  }]
});

const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;
