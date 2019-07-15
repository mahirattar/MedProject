// Aliments.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Aliments
let Aliments = new Schema({
    AlimentNom: {
    type: String
  },
  AlimentQte: {
    type: Number
  },
  AlimentDescription: {
    type: String
  },
  AlimentCalorie: {
    type: Number
  }
},{
    collection: 'Aliments'
});

module.exports = mongoose.model('Aliments', Aliments);