const { Model }       = require('../models/model');
const product         = new Model('products');

module.exports = {

    // Display list of all ProductInstances.
    index: async (req, res) => {
        let idQuery;

        if (req.params.id) {
            idQuery = ` WHERE id = ${req.params.id}`;
        } else {
            idQuery = ` ORDER BY id;`;
        }
        try {
            const data = await product.select('*', idQuery);

            res.status(200).json({
                data: data.rows,
                currentUser: req.session.userId,
            });
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Query select the specific product.
    show: async (req, res) => {
        try {
            const data = await product.select(
                '*',
                ` WHERE id = ${req.params.id}`
            );
            const userId = req.session.userId;
            res.render('products_show', { ...data.rows[0], userId });
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Display the new product page.
    create: (req, res) => {
        res.render('products_new');
    },

    // Query insert products.
    store: async (req, res) => {
        const {
            title,
            description,
            price,
            location,
            user_id,
            cover_photo_url,
            product_photo_url,
        } = req.body;

        const columns =
            'title, description, price, location, user_id, cover_photo_url, product_photo_url';
        const values = [
            title,
            description,
            price,
            location,
            req.session.userId,
            cover_photo_url,
            product_photo_url,
        ];

        try {
            await product.insert(columns, values, res);
            res.redirect('/products');
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Handle ProductInstance delete on POST.
    destroy: (req, res) => {
        res.send('NOT IMPLEMENTED: ProductInstance delete POST');
    },

    // Set product active status to false.
    update: async (req, res) => {
        try {
            const data = await product.update(
                'active',
                false,
                `WHERE products.id = ${req.params.id}`
            );
            res.redirect('/products/');
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Query select featured and active products.
    featured: async (req, res) => {
        try {
            const data = await product.select(
                `*`,
                ` WHERE featured = true AND active = true`
            );
            res.status(200).json({ data: data.rows });
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Display all favorited products.
    favorite: async (req, res) => {

      try {
        const currentUser = req.session.userId;
        const data = await product.select(
          '*',
          ` JOIN favorites on product_id = products.id
            where favorites.user_id = ${currentUser} AND products.active = true AND favorites.active = true;`
        );
        res.status(200).json({ data: data.rows });
      } catch (err) {
        res.status(200).json({ error: err.stack });
      }
    },

    // Filter products by price.
    filter: async (req, res) => {
      let price = req.params.price;

      try {
        const data = await product.select(
          '*',
          ` WHERE price < ${price} AND active = true`
        );
        res.status(200).json({ data: data.rows });
      } catch (err) {
        res.status(200).json({ error: err.stack });
      }
    },
};
