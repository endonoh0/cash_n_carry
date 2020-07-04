const express     = require('express');
const router      = express.Router();
const product     = require('../controllers/products');

module.exports = (db, io) => {

    // Set the user and product session id.
    let id;
    let productId;

    // Display the product site page.
    router.get('/', (req, res) => {
        res.render('index');
    });

    // Display a list of products.
    router.get('/products', (req, res) => {
        res.render('products');
    });

    // Display a list of favorite products.
    router.get('/products/favorites', (req, res) => {
        res.render('product_favorites');
    });

    // Display the user's favorites.
    router.get('/api/favorites', product.favorite);

    // API request price filter.
    router.get('/filter/:price', product.filter);

    // Persist the product to database.
    router.post('/api/products', product.store);

    // Display the form to create a new product.
    router.get('/products/new', product.create);

    // Display all featured products.
    router.get('/products/featured', product.featured);

    // Display the specific product.
    router.get('/products/:id', (req, res) => {
        product.show(req, res);
        id = req.session.userId;
        productId = req.params.Id;
    });

    // Update the product.
    router.post('/products/:id', product.update);

    // Io messenger
    io.on('connection', (socket) => {
        console.log('user connected', socket.id);
        socket.on('chat message', (msg) => {
            console.log(msg);
            io.emit('chat message', {
                username: msg.id,
                message: msg.message,
            });
        });
        socket.on('disconnect', () => {
            console.log('disconnect: ');
            socket.removeAllListeners();
            socket.off('chat message', () => {});
        });
    });
    return router;
};
