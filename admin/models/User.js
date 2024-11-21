const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    about: String,
    clerkId: String,
    Address: String, 
    phone: String, 
    petsId: Array,
});

module.exports = mongoose.model('User', UserSchema);