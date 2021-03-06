const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./server/routes');

// app
const app = express();

// logging
app.use(morgan('tiny'));

// static files
app.use(express.static(path.join(__dirname, 'dist')));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// statics
app.use(express.static('server/images'))

// routes
app.use('/api', routes);

// database
mongoose.Promise = Promise;
mongoose.connect('mongodb://reivaj79mx:Lyj_25022013@ds125058.mlab.com:25058/amiibo-db')
  .then(() => {
    console.log('Conectado a: amiibo-db');

    // init app
    const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App corriendo en el puerto: ${ port }`);
  });
});