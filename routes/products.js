const express = require('express');
const router = express.Router();
const product = require('../controllers/products');

module.exports = (db, io) => {
    
    router.get('/', (req, res) => {
        res.render('index');
    });

    // GET request for list of all product items.
    router.get('/products', (req, res) => {
        res.render('products');
    });

    // POST request for creating a product.
    router.post('/api/products', product.store);

    // GET request for creating a product. Note this must come before routes that display book (uses id).
    router.get('/products/new', product.create);
    
    // GET request for one product.
    router.get('/products/:id', product.show);

    // POST request to delete product.
    router.post('/products/:id', product.destroy);

    // POST request to update product.
    router.post('/products/:id', product.update);

    // router.get('/', (req, res) => { // products
    //     res.render('products');
    // });

    // router.get('/:id', (req, res) => {
    //     const productId = req.params.id;
    //     res.render('products_show', { productId });
    // });

    // router.get('/:id/messages', (req, res) => {
    //     res.render('messages');
    // });

    // router.post('/', (req, res) => {
    //     const userId = req.session.userId;
    //     const {
    //         title,
    //         description,
    //         price,
    //         quantity,
    //         location,
    //         cover_photo_url,
    //         product_photo_url,
    //         seller_id,
    //         active,
    //         featured,
    //     } = { ...req.body, seller_id: userId, active: true, featured: true };
    //     db.query(
    //         `INSERT INTO products (title, description, price, quantity, location, cover_photo_url, product_photo_url, seller_id, active, featured)
    //   VALUES ($1, $2, $3, $4, $5, $6, $7)
    //   RETURNING *;`,
    //         [
    //             title,
    //             description,
    //             price,
    //             quantity,
    //             location,
    //             cover_photo_url,
    //             product_photo_url,
    //             seller_id,
    //             active,
    //             featured,
    //         ]
    //     );
    // });

    // router.post('/:id/messages', (req, res) => {});

    // //Overloaded methods
    // router.patch('/:id', (req, res) => {});

    // router.delete('/:id', (req, res) => {});

    return router;
};
