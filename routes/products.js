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

  router.post('/', (req, res) => {
    const userId = req.session.userId;

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