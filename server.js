const PORT              = process.env.PORT || 8080;
const express           = require('express');
const bodyParser        = require('body-parser');
const cookieSession     = require('cookie-session');
const morgan            = require('morgan');
const sass              = require('node-sass-middleware');
const app               = express();
const http              = require('http').createServer(app);
const io                = require('socket.io')(http);

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);
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
app.use(
    cookieSession({
        httpOnly: false,
        name: 'session',
        keys: ['key1', 'key2'],
    })
);
app.use(express.static('public'));

// Database connection
const { database }        = require('./models/pool.js');

// Routes
const indexRouter         = require('./routes/index');
const productRouter       = require('./routes/products');
const messageRouter       = require('./routes/messages');

// API endpoints
app.use('/api', indexRouter(database));

// Product routes
app.use('/', productRouter(database, io));

// Message routes
app.use('/messages', messageRouter(database));

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
