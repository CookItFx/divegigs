const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    name: String,
    mimetype: String,
    buffer: Buffer,
    size: Number,
    encoding: String
});

let Image = module.exports = mongoose.model('image', ImageSchema);