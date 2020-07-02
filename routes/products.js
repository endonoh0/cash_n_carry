const express = require('express');
const router = express.Router();
const product = require('../controllers/products');

const { Model } = require('../models/model');
const message = new Model('messages');

module.exports = (db, io) => {
    let id;
    let productId;

    router.get('/', (req, res) => {
        res.render('index');
    });

    // GET request for list of all product items.
    router.get('/products', (req, res) => {
        res.render('products');
    });

    // favorites
    router.get('/products/favorites', (req, res) => {
        res.render('product_favorites');
    });

    router.get('/api/favorites', product.favorite);

    // filter price url
    router.get('/filter/:price', product.filter);

    // POST request for creating a product.
    router.post('/api/products', product.store);

    // GET request for creating a product. Note this must come before routes that display book (uses id).
    router.get('/products/new', product.create);

    router.get('/products/featured', product.featured);

    // GET request for one product.
    router.get('/products/:id', (req, res) => {
        product.show(req, res);
        id = req.session.userId;
        productId = req.params.Id;
    });

    // POST request to update product.
    router.post('/products/:id', product.update);

    // Io messenger
    io.on('connection', (socket) => {
        console.log('user connected', socket.id);
        socket.on('chat message', (msg) => {
            const socketID = socket.id;

            io.emit('chat message', {
                username: socket.id,
                message: msg,
            });
            console.log(msg);

            const column = 'user_id, body, product_id';
            const values = [id, `'${msg}'`, productId];

            message.insert(column, values);
        });
        socket.on('disconnect', () => {
            console.log('disconnect: ');
            socket.removeAllListeners();
            socket.off('chat message', () => {});
        });
    });
    return router;
};
