const express         = require('express');
const router          = express.Router();

module.exports = (db, io) => {

    const message     = require('../controllers/messages')(io);

    router.get('/', message.index);

    return router;
};
