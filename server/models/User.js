const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    avatar: {
        data: Buffer,
        contentType: String
    },
    petsId: Array,
});

module.exports = mongoose.model('User', UserSchema);