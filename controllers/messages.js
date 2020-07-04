const { Model }       = require('../models/model');
const message         = new Model('messages');

module.exports = {

    // Store the newly created product.
    store: async (req, res) => {
        const { msg, productId }    = req.body;
        const column                = 'user_id, body, product_id';
        const values                = [ req.session.userId, `${msg}`, productId ];

        try {
            message.insert(column, values);
            res.status(200);
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Query select the product.
    show: async (req, res) => {
        const productId     = req.query.productId;
        const query         = `
            JOIN users ON user_id = users.id
            WHERE product_id = ${productId}
        `;

        try {
            const data = await message.select('*', query);

            res.status(200).json({
                data: data.rows,
                currentUser: req.session.userId,
            });
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },
};
