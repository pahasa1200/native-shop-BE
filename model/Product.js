const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productModel = new Schema({
    name: { type: String, required: true },
    cost: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productModel);
