// basic express app setup using mongoose

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 5000;


app.set('view engine', 'ejs', );
// connect to mongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});

//  middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const router = require('./routes/routes.js');
app.use('/', router);

// start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});