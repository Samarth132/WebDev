const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var countrySchema = new Schema({
    Country: String,
    Region: String,
    Population: Number,
    'Coastline(coast/arearatio)': String,
    Netmigration: String,
    'GDP($percapita)': String,
    'Literacy(%)': String
}, {collection: 'countries'});

module.exports = mongoose.model('country', countrySchema);