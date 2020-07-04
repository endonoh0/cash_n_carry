const express = require('express');
const router = express.Router();
const product = require('../controllers/products');

module.exports = () => {

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
    router.get('/products/:id', product.show);

    // POST request to update product.
    router.post('/products/:id', product.update);

    return router;
};
