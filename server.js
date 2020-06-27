const { pool } = require('./models/pool.js');

const PORT = process.env.PORT || 8080;
const express = require('express');
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    '/styles',
    sass({
        src: __dirname + '/styles',
        dest: __dirname + '/public/styles',
        debug: true,
        outputStyle: 'expanded',
    })
);
app.use(express.static('public'));

// Separat ed Routes for each Resource
const usersRoutes = require('./routes/users');

// Mount all resource routes
app.use('/api/users', usersRoutes(pool));

// Home page
// Warning: avoid creating more routes in this file!
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
