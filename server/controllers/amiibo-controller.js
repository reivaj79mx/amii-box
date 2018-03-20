const _ = require('lodash');

const AmiiboModel = require('../models/amiibo-model');

/**
 * Obtiene TODOS los amiibox
 * @param {object} req 
 * @param {object} res 
 */
exports.GetAll = function (req, res) {

  AmiiboModel.find().then(amiibos => {
    // por default ordenar por fecha -> descendente
    res.status(200).json(_.orderBy(amiibos, ['date'], ['desc']))
  }).catch(err => {
    res.status(500).send('Bad request');
  });
}

/**
 * Obtiene el amiibo con el id especificado
 * @param {object} req 
 * @param {object} res 
 */
exports.GetOne = function (req, res) {

  const id = req.params.id;

  AmiiboModel.findById(id).then(amiibo => {
    res.status(200).json(amiibo);
  }).catch(err => {
    res.status(500).send('Bad request');
  });
}

/**
 * Establece el estado del amiibo own/no own
 * @param {object} req 
 * @param {object} res 
 */
exports.SetOwn = function (req, res) {

  const id = req.params.id;

  AmiiboModel.findById(id).then(amiibo => {

    // toggle own
    amiibo.own = !amiibo.own;

    amiibo.save().then(() => {
      res.status(200).json({
        message: 'Actualizado!'
      });
    }).catch(err => {
      res.status(500);
    });
  });
}

/**
 * Obtiene TODAS las series
 * @param {object} req 
 * @param {object} res 
 */
exports.getSeries = function (req, res) {

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

/**
 * Obtiene SOLO los amiibos que estan en la collection
 * @param {object} req 
 * @param {object} res 
 */
exports.getAmiiboOwn = (req, res) => {

  AmiiboModel.find({ own: true }).then(amiibos => {
    res.status(200).json(amiibos);
  }).catch(err => {
    res.status(500).send('Bad request');
  });

}

/**
 * Agrega un nuevo Amiibo
 * @param {object} req 
 * @param {object} res 
 */
exports.addAmiibo = (req, res) => {
  const amiibo = new AmiiboModel({
    name: req.body.name,
    serie: req.body.serie,
    image: req.body.image,
    date: new Date(req.body.date),
    own: req.body.own
  });

  amiibo.save().then(() => {
    console.log('Saved!!!');
  });
}
