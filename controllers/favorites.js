const { Model }         = require('../models/model');
const favorite          = new Model('favorites');


module.exports = {

    store: async (req, res) => {
        const favorites = { clickTime: new Date() };
        console.log("FAVORITE: ",favorites);
        
        const userId = req.session.userId;
        const productId = req.body.$product_id;
        console.log(userId, productId);

        const values = [userId, productId];

        try {
            await favorite.insert('user_id, product_id', values, res);
            res.status(200);
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    }
};