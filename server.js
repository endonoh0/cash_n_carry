// Database connection
const { database } = require('./models/pool.js');

const morgan = require('morgan');
const sass = require('node-sass-middleware');

const PORT = process.env.PORT || 8080;
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
// const io = require('socket.io')(http, {
//     path:'/products/'
// });

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('trust proxy', 1);
app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const productsRoutes = require("./routes/products");

// /products/endpoint
const productRouter = express.Router();
productsRoutes(productRouter, db);
app.use('/products', productRouter);

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));

// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});
=======
app.use(
    '/styles',
    sass({
        src: __dirname + '/styles',
        dest: __dirname + '/public/styles',
        debug: true,
        outputStyle: 'expanded',
    })
);
app.use(
    cookieSession({
        httpOnly: false,
        name: 'session',
        keys: ['key1', 'key2'],
    })
);
app.use(express.static('public'));

const indexRouter = require('./routes/index');
const productRouter = require('./routes/products');
const messageRouter = require('./routes/messages');
>>>>>>> feature/sold

// API endpoints
app.use('/api', indexRouter(database));

// Product routes
app.use('/', productRouter(database, io));

// Messaeg routes
app.use('/messages', messageRouter(database, io));

// // Home page
// app.get('/', (req, res) => {
//     res.render('index');
// });
// io.on('connection', () =>{
//     console.log('a user is connected')
//   });

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`);
// });

// module.exports = io;
