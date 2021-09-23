const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var riverSchema = new Schema({
    River: String,
    'Length(km)': Number,
    'Length(miles)': Number,
    'Drainagearea(km²)': Number,
    'Averagedischarge(m³/s)': String,
    Outflow: String,
    Countriesinthedrainagebasin: Object
}, {collection: 'Rivers'});

module.exports = mongoose.model('river', riverSchema);