const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('products');
});

router.get('/new', (req, res) => {
    res.render('products_new');
});

router.get('/:id', (req, res) => {
    const productId = req.params.id;
    res.render('products_show', { productId });
});

module.exports = router;
