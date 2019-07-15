const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

   const alimentRoutes = require('./routes/aliment.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Your Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/Aliments', alimentRoutes);
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });