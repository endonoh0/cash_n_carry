/*
 * All routes defined here are mounted onto /api
 */
const express     = require('express');
const router      = express.Router();

const users       = require('../controllers/users');
const products    = require('../controllers/products');
const favorties   = require('../controllers/favorites');
const messages    = require('../controllers/messages');

module.exports = (db) => {

    // Display the user in chat.
    router.get('/users', users.index);

    // Display all products.
    router.get('/products', products.index);

    // Display the specific product.
    router.get('/products/:id', products.index);

    // Login as the user
    router.get('/users/:id', users.show);

    // Display all messages in chat.
    router.get('/messages', messages.show);

    // Favorite the product.
    router.post('/favorite/', favorties.favorite);

    // Unfavorite the product.
    router.post('/unfavorite/', favorties.unfavorite);

    return router;
};
