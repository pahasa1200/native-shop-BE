const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderedProductModel = new Schema({
    count: {type: Number, required: true},
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' }
})

module.exports = mongoose.model('OrderedProduct', orderedProductModel);
