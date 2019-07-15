// Utilisateur.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Utilisateur
let Utilisateur = new Schema({
    UtilisateurNom: {
    type: String
  },
  UtilisateurPrenom: {
    type: String
  },
  UtilisateurMail: {
    type: String
  },
  UtilisateurAge: {
    type: Number
  },
  UtilisateurTaille: {
    type: Number
  },
  UtilisateurPoid: {
    type: Number
  },
  UtilisateurGenre: {
    type: String
  }
},{
    collection: 'Utilisateur'
});

module.exports = mongoose.model('Utilisateur', Utilisateur);