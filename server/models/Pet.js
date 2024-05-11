const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: String,
    age: Number,
    type: String,
    breed: String,
    description: String,
    avatar: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Pet', PetSchema);
