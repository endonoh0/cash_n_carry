const { Model }         = require('../models/model');
const favorite          = new Model('favorites');

module.exports = {

    favorite: async (req, res) => {
        const userId    = req.session.userId;
        const productId = req.body.$prodjuct_id;
        const values    = [userId, productId, true];

        try {
            // Select all favorites.
            const data = await favorite.select(
                '*',
                ` WHERE user_id = ${userId} AND product_id = ${productId}`
            );

            // Set favorite status to true.
            if (data.rows.length) {
                await favorite.update(
                    'active',
                    true,
                    ` WHERE user_id = ${userId} AND product_id = ${productId}`
                );
            } else {
                await favorite.insert('user_id, product_id, active', values);
            }
            res.status(200);
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Set favorite status to false.
    unfavorite: async (req, res) => {
        const userId      = req.session.userId;
        const productId   = req.body.$product_id;

        try {
            await favorite.update(
                'active',
                false,
                ` WHERE user_id = ${userId} AND product_id = ${productId}`
            );
            res.status(200);
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },
};
