const { Model } = require('../models/model');
const messageModal = new Model('messages');

module.exports = {
    index: (req, res) => {
        res.render('messages');
    },
    store: async (req, res) => {
        const { msg , productId } = req.body;
        try {
            const column = 'user_id, body, product_id';
            const values = [req.session.userId, `${msg}`, productId];
            messageModal.insert(column, values);
            res.status(200);
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },
    show: async (req,res) => {
        const productId = req.query.productId;
        try {
            const query = ` 
            JOIN users ON user_id = users.id
            WHERE product_id = ${productId}`;
            const data = await messageModal.select('*', query);
            res.status(200).json({ data: data.rows, currentUser: req.session.userId});
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },
};
