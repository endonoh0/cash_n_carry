const { Model }   = require('../models/model');
const user        = new Model('users');

module.exports = {

    // Display a list of all UserInstances.
    index: async (req, res) => {
        try {
            const data = await user.select(
                '*',
                ` WHERE id = ${req.query.userId}`
            );
            res.status(200).json({ data: data.rows });
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Display the specific UserInstance.
    show: (req, res) => {
        req.session.userId = req.params.id;
        return res.redirect('/');
    },
};
