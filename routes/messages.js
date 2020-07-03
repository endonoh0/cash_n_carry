const express = require('express');
const router = express.Router();
const message = require('../controllers/messages');

module.exports = (db, io) => {
    // const message = require('../controllers/messages')(io);
    router.get('/', (req, res) => {
       res.send("you made it");
    });

    router.post('/store', message.store);

    // io.on('connection', (socket) => {
    //     console.log('user connected', socket.id);
    //     socket.on('chat message', (msg) => {
    //         const socketID = socket.id;

    //         io.emit('chat message', msg);
    //         console.log(msg);
    //         // product code is hard-cdded
    //         const column = 'user_id, body, product_id';
    //         const values = [id, `'${msg}'`, 3];
    //         // const values = [req.session.id, msg, req.params.id];

    //         message.insert(column, values);
    //         console.log(msg);
    //     });
    //     socket.on('disconnect', () => {
    //         console.log('disconnect: ');
    //         socket.removeAllListeners();
    //         socket.off('chat message', () =>{

    //         });
    //     });
    // });

    return router;
};
