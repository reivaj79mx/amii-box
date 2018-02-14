const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AmiiboSchema = new Schema({
  name: String,
  serie: String,
  date: Date,
  image: String,
  own: Boolean
})

module.exports = mongoose.model('Amiibos', AmiiboSchema);