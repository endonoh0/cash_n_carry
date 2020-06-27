const express = require('express');
const router  = express.Router();

module.exports = () => {
  router.get("/:id", (req, res) => {
    const productId = req.params.id;
    res.render('products_show', {productId});
  });
  return router;
};

module.exports = () => {
  router.get("/", (req, res) => {
    res.render('products');
  });
  return router;
};