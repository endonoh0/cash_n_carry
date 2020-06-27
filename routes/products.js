module.exports = (router, db) => {

  router.get('/', (req, res) => {
    res.render('products');
  });

  router.get('/new', (req, res) => {
    res.render('products_new');
  });

  router.get('/:id', (req, res) => {
    const productId = req.params.id;
    res.render('products_show', {productId});
  });

  router.get('/:id/messages', (req, res) => {
    res.render('messages');
  });

  router.post('/', (req, res) => {
    const userId = req.session.userId;
    const {title, description, price, quantity, location, cover_photo_url, product_photo_url, seller_id, active, featured} = {...req.body, seller_id: userId, active: true, featured: true};
    db.query(`INSERT INTO products (title, description, price, quantity, location, cover_photo_url, product_photo_url, seller_id, active, featured)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;`, [title, description, price, quantity, location, cover_photo_url, product_photo_url, seller_id, active, featured]
    );
  });

  return router;
};

// router.get('/', (req, res) => {
//   res.render('products');
// });

// router.get('/new', (req, res) => {
//   res.render('products_new');
// });

// router.get('/:id', (req, res) => {
//   const productId = req.params.id;
//   res.render('products_show', {productId});
// });

// router.post('/', (req, res) => {
//   const userId = req.session.userId;

// });

// module.exports = router;