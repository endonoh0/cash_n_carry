/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

const users = require('../controllers/users');
const products = require('../controllers/products');
const favorties = require('../controllers/favorites');

// const db        = require('/models/pool');

module.exports = (db) => {
    // GET request to show all users.
    router.get('/users', users.index);

    // GET request to show all products.
    router.get('/products', products.index);

    // GET request for one user.
    router.get('/users/:id', users.show);

    router.post('/favorite/', favorties.store);
    // router.post('/favorite/', (req, res) => {
    //     const favorite = { clickTime: new Date()};
    //     console.log(favorite);
    //     console.log(req.body.$product_id);
    //     res.sendStatus(200);
    // const id = req.session.user_idj;

    // const queryString = `INSERT INTO favorites (user_id, product_id) VALUES ($1, $2) RETURN *;`;
    // const values = [id, req.params.id];

    // db.query(queryString, values)
    //     .then(res => console.log(res.rows));

    // db.query('clicks').save(click, (err, result) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log('click added to db');
    //     res.sendStatus(201);
    // });
    // });

    return router;
};
