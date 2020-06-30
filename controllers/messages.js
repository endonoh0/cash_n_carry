const { Model }       = require('../models/model');
const message    = new Model('messages');

module.exports = {

    index: (req, res) => {
        res.render('messages');
    }
};