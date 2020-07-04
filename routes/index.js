const express = require('express');
const router = express.Router();

const users = require('../controllers/users');
const products = require('../controllers/products');
const favorties = require('../controllers/favorites');
const messages = require('../controllers/messages');


module.exports = () => {
    // GET request to show all users.
    router.get('/users', users.index);

    // GET request to show all products.
    router.get('/products', products.index);

    // GET request to one specific product.
    router.get('/products/:id', products.index);

    // GET request for one user.
    router.get('/users/:id', users.show);

    // GET request for all messages
    router.get('/messages', messages.show);

    // POST request to add item to favorites table
    router.post('/favorite/', favorties.favorite);

    // POST request to set active status of favorite to false
    router.post('/unfavorite/', favorties.unfavorite);

    return router;
};
