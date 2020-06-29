const express     = require('express');
const router      = express.Router();
const product     = require('../controllers/products');

module.exports = (db) => {

  // PRODUCT ROUTES //

  // GET request for creating a product. Note this must come before routes that display book (uses id).
  router.get('/new', product.create);

  // POST request for creating a product.
  router.post('/', product.store);

  // POST request to delete product.
  router.post('/:id', product.destroy);

  // POST request to update product.
  router.post('/:id', product.update);

  // GET request for one product.
  router.get('/:id', product.show);

  // GET request for list of all product items.
  router.get('/', product.index);

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
