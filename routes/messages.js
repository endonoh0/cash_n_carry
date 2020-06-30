const express     = require('express');
const router      = express.Router();
const message     = require('../controllers/messages');

module.exports = (db, io) => {

    router.get('/', message.index);
    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
        });
    });
    return router;
};