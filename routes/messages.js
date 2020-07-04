const express       = require('express');
const router        = express.Router();
const message       = require('../controllers/messages');

module.exports = (db, io) => {

    // Persist the message to database.
    router.post('/store', message.store);
    return router;
};
