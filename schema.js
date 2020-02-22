const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    EmailId: {type: String},
    Ticket: {type: String},
    status: {type: String}
})

module.exports = mongoose.model('Product', productSchema);