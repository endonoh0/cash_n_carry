const express = require('express');
const router  = express.Router();

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  res.render('products_show', {productId});
});

router.get("/", (req, res) => {
  res.render('products');
});

module.exports = router;