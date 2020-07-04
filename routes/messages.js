const express = require('express');
const router = express.Router();
const message = require('../controllers/messages');

module.exports = () => {
    
    router.post('/store', message.store);

    return router;
};
