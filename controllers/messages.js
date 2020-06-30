const { Model }       = require('../models/model');
const message         = new Model('messages');

module.exports = (io) => {
    const that = {};
    const _io = io;

    that.index = (req, res) => {
        res.render('messages');

        _io.on('connection', (socket) => {
            socket.on('chat message', (msg) => {
                const socketID = socket.id;

                _io.emit('chat message', msg);

                const column = 'user_id, body, product_id';
                const values = [1, `'${msg}'`, 3];
                // const values = [req.session.id, msg, req.params.id];

                message.insert(column, values);
                // console.log(msg);
            });
        });
    };
    return that;
};
