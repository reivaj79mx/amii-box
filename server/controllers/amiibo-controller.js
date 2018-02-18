const _ = require('lodash');

const AmiiboModel = require('../models/amiibo-model');

exports.GetAll = function(req, res) {

  AmiiboModel.find().then(amiibos => {
    res.status(200).json(amiibos);
  }).catch(err => {
    res.status(500).send('Bad request');
  });
}

exports.GetOne = function(req, res) {

  const id = req.params.id;

  AmiiboModel.findById(id).then(amiibo => {
    res.status(200).json(amiibo);
  }).catch(err => {
    res.status(500).send('Bad request');
  });
}

exports.SetOwn = function(req, res) {

  const id = req.params.id;

  AmiiboModel.findById(id).then(amiibo => {

    // toggle own
    amiibo.own = !amiibo.own;

    amiibo.save().then(() => {
      res.status(200).json({ message: 'Actualizado!' });
    }).catch(err => {
      res.status(500);
    });
  });
}

exports.getSeries = function(req, res) {

  AmiiboModel.find().then(amiibos => {

    const series = _.map(amiibos, el => {
      if (el.serie === '') {
        el.serie = 'Sin serie'
      }
      
      return el.serie;
    });

    res.status(200).json(_.uniq(series));
  }).catch(err => {
    res.status(500).send('Bad request');
  });
}