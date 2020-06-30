const { Model } = require('../models/model');
const productModel = new Model('products');

module.exports = {
    // Display list of all ProductInstances.
    index: async (req, res) => {
        try {
            const data = await productModel.select('*');
            res.status(200).json({ data: data.rows });
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Display detail page for a specific ProductInstance.
    show: async (req, res) => {
        try {
            const data = await productModel.select(
                '*',
                ` WHERE id = ${req.params.id}`,
                res
            );
            res.render('products_show', data.rows[0]);
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Display ProductInstance create form on GET.
    create: (req, res) => {
        res.render('products_new');
    },

    // Handle ProductInstance create on POST.
    store: async (req, res) => {
        const {
            title,
            description,
            price,
            location,
            cover_photo_url,
            product_photo_url,
            user_id,
        } = req.body;

        const columns = 'title, description, price, location, user_id';
        const values = `'${title}', '${description}', ${price}, '${location}', 1`;

        try {
            await productModel.insert(columns, values, res);
            res.redirect('/products');
        } catch (err) {
            res.status(200).json({ error: err.stack });
        }
    },

    // Handle ProductInstance delete on POST.
    destroy: (req, res) => {
        res.send('NOT IMPLEMENTED: ProductInstance delete POST');
    },

    // Handle ProductInstance update on POST.
    update: (req, res) => {
        res.send('NOT IMPLEMENTED: ProductInstance list');
    },
};

// const addProduct = async (req, res) => {

// module.exports = addProduct;
// module.exports = productPage;
