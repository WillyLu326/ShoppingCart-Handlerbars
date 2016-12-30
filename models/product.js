/**
 * Created by zhenglu on 12/30/16.
 */
const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const productSchema = new Schema({
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);