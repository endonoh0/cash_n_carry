/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express         = require('express');
const router          = express.Router();

const users           = require('../controllers/users');


module.exports = () => {

    // GET site home page.
    router.get('/', (req, res) => {
      res.render('index');
    });

    // GET request to show all users.
    router.get('/users', users.index);

    // GET request for one user.
    router.get('/users/:id', users.show);




    return router;
};
