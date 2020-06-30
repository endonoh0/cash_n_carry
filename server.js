// Database connection
const { database }      = require('./models/pool.js');

const morgan        = require('morgan');
const sass          = require('node-sass-middleware');

const PORT          = process.env.PORT || 8080;
const express       = require('express');
const bodyParser    = require('body-parser');

const app           = express();
const http          = require('http').createServer(app);
const io            = require('socket.io')(http);

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

const indexRouter = require('./routes/index');
const productRouter = require('./routes/products');
const messageRouter = require('./routes/messages');

// API endpoints
app.use('/api', indexRouter(database));

// Product routes
app.use('/', productRouter(database));

// Messaeg routes
app.use('/messages/', messageRouter(database, io));

// // Home page
// app.get('/', (req, res) => {
//     res.render('index');
// });


http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`);
// });

// module.exports = io;
