// aliment.route.js

const express = require('express');
const app = express();
const alimentRoutes = express.Router();

// Require aliment model in our routes module
let Aliments = require('../models/Aliments');

// Defined store route
alimentRoutes.route('/add').post(function (req, res) {
  let Aliments = new Aliments(req.body);
  Aliments.save()
    .then(Aliments => {
      res.status(200).json({'Aliments': 'Aliments has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to  database");
    });
});


module.exports = alimentRoutes;