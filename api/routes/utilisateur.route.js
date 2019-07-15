// utilisateur.route.js

const express = require('express');
const app = express();
const utilisateurRoutes = express.Router();

// Require utilisateur model in our routes module
let Utilisateur = require('../models/Utilisateur');
let Aliment = require('../models/Utilisateur');

// Defined store route
utilisateurRoutes.route('/add').post(function (req, res) {
  let utilisateur = new Utilisateur(req.body);
  utilisateur.save()
    .then(utilisateur => {
      res.status(200).json({'Utilisateur': 'Utilisateur has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

utilisateurRoutes.route('/addAliments').post(function (req, res) {
  let Aliments = new Aliment(req.body);
  Aliments.save()
    .then(Aliments => {
      res.status(200).json({'Aliment': 'Aliment has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
utilisateurRoutes.route('/').get(function (req, res) {
    Utilisateur.find(function (err, utilisateur){
    if(err){
      console.log(err);
    }
    else {
      res.json(utilisateur);
    }
  });
});

// Defined edit route
utilisateurRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Utilisateur.findById(id, function (err, utilisateur){
      res.json(utilisateur);
  });
});

//  Defined update route
utilisateurRoutes.route('/update/:id').post(function (req, res) {
  Utilisateur.findById(req.params.id, function(err, utilisateur) {
    if (!utilisateur)
      res.status(404).send("Record not found");
    else {
      utilisateur.UtilisateurNom = req.body.UtilisateurNom;
      utilisateur.UtilisateurPrenom = req.body.UtilisateurPrenom;
      utilisateur.UtilisateurMail = req.body.UtilisateurMail;
      utilisateur.UtilisateurAge = req.body.UtilisateurAge;
      utilisateur.UtilisateurTaille = req.body.UtilisateurTaille;
      utilisateur.UtilisateurPoid = req.body.UtilisateurPoid;
      utilisateur.UtilisateurGenre = req.body.UtilisateurGenre;

      utilisateur.save().then(utilisateur => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
utilisateurRoutes.route('/delete/:id').get(function (req, res) {
    Utilisateur.findByIdAndRemove({_id: req.params.id}, function(err, utilisateur){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = utilisateurRoutes;