const express = require('express');
const router  = express.Router();

module.exports = () => {
    router.get("/:id", (req, res) => {
        res.render('product')
    });
    return router;
  };